import React, {Component} from 'react';
import {connect} from 'react-redux';

import Item from '../subPage/Item'

import {initData} from '../../../actions/initUserOrder';

import '../user.css';

class UserOrder extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        this.props.loadData(this.props.userphone);
    }

    componentWillReceiveProps(nextProps){
        // if(this.props.data.length===0){
        //     this.props.loadData(this.props.userphone);   
        // }
    }

    render(){
        let {data,flag} = this.props.data;
        return(
            <div className="user-order" >
                <div className="main-title">
                    我的订单
                </div>
               {
                  flag ? data.map( (item,index)=>{
                       return <Item data={item} key={index} ></Item>
                   } ) : <div> 暂无数据... </div>
               }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        data:state.inituserorder
    }
}

function mapDispatchToProps( dispatch ){
    return{
        loadData:(username)=>{
            dispatch( initData(username) )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserOrder);