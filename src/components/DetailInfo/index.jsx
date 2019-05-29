import React, {Component} from 'react';
import {connect} from 'react-redux';
import { conserveAdd, conserveRemove } from '../../actions/conserve'

import './detailInfo.css'


class DetailInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isConserve:false
        }
    }

    // 下单事件
    handleClick = ()=>{
        alert('下单了');
    }

    // 检查是否登录
    checkLogin = ()=>{
        const {id,info }= this.props;
        const userphone = this.props.userphone;
        let isLocal = localStorage.getItem('user');
        
        
        if(!isLocal){
            this.props.history.push(`/login/${info}/${id}`);
            return false
        }
       else if(userphone || isLocal ){
            return true
        }
        else{
            // 没登录，跳到登录页面的时候,传入目标 router ,以便登录之后能回来
            this.props.history.push(`/login/${info}/${id}`);
            return false
        }
    }

    // 检查当前商户是否被收藏
    checkIsConverse = ()=>{
        const id = this.props.id;
        const converse = this.props.converse;
        converse.forEach( item=>{
            if(item.id === id ){
                this.setState({
                    isConserve:true
                })
                return true;
            }
            return false;
        } )
    }

    // 收藏事件
    hanldeConserve=()=>{
        const flag =this.checkLogin();
        // 如果没登录
        if(!flag){
            return;
        }
        const {id}= this.props;
        // 如果收藏了，取消收藏
        if(this.state.isConserve){
            this.props.remove({id:id})
        }else{
               // 没收藏，则收藏
            this.props.add({id:id})
        }
        
        this.setState({
            isConserve : !this.state.isConserve
        })

    }

    componentDidMount = ()=>{
        this.checkIsConverse();
    }


    render(){
       let data = this.props.data[0].data;        
        return(
            <div className="detail-info" >
                <h1 className="detai-info-tittle" > {this.props.info} </h1>
                
                <div className="start">
                   星级信誉 ★ ★ ★ ★ ★
                </div>
                
                <div className="flex">
                    <div className="left">
                      <span className='icon' > ◇ </span>  
                      商家类型：<span className="hasboder" > {data.starName} </span>
                    </div>
                    <div className="right">
                         <span className="defen">{data.servicesScore}</span>  / {data.overviewScore}分
                    </div>
                </div>
               
                <div className="lscj">
                    <span className='icon' > ◇ </span>  
                    历史成交 ： <span className="hasboder" > {data.soldCountHistory} </span>
                </div>
               
                <div className="flex">
                    <div className="left">
                        <span className='icon' > ◇ </span>  
                       用户满意度： <span className="hasboder">{data.satisfactionPercentage}</span>
                    </div>

                    <div className="right">
                        {data.totalRatings}条评论
                    </div>
                </div>

                <div className="order">
                    {
                        this.state.isConserve ?  <button onClick={this.hanldeConserve} > 已收藏 </button> 
                        : <button className="conserve" onClick={this.hanldeConserve} > 收 藏 </button>
                    }
                   
                    <button onClick = {this.handleClick} > 立即下单 </button>
                </div>
               
                <ul className="comment">
                    {
                        data.recentOrders.map( (item,index)=>{
                            return <li key={index}> {item} </li>
                        } )
                    }
                </ul>
            
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userphone:state.userphone,
        converse:state.converse
    }
}

function mapDispatchToProps(dispatch){
    return{
        add:(obj)=>{
            dispatch( conserveAdd(obj) )
        },
        remove:(obj)=>{
            dispatch( conserveRemove(obj) )
        }

    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(DetailInfo);