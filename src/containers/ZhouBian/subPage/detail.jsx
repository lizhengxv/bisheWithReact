import React, {Component} from 'react';
import { Button } from 'antd-mobile';
import HeaderCommon from '../../../components/Header/HeaderCommon';
import Loading from '../../../components/Loading'

import './detail.css'

import $ from 'jquery';

import Comment from './Comment'



const url ='http://127.0.0.1:8080/zhoubian';
// const url ='http://192.168.1.187:8080/zhoubian';

class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgurl : '',
            title:'',
            data:null,
            show:false,
            comment:null,
            iscomment:true
        }
    }

    // 我怎么这么鸡汁, 请求的数据没有imgurl
    getImgUrl = (path)=>{
       let imgurl =  path.split('https://')
       imgurl ='https://' +imgurl[1]
       return imgurl
    }

    // 把标题放路由传过来了， 再拿出来  /xx是标志
    getTitle=(path)=>{
        let title = path.split('/xx')[1];
        return title
    }

    componentDidMount(){
        let _this = this;
        let {id}=  this.props.match.params;
        let {pathname} = this.props.location
        let imgurl = this.getImgUrl(pathname) || '';    
        let title = this.getTitle(pathname);
        this.setState({
            imgurl,
            title
        })     
        $.ajax({
            type:'get',
            url:url+'/getinfobyid?id='+id,
            success:(res)=>{
                _this.setState({
                    data:res
                })
            }
        })
    }

    handleFenqi = ()=>{
        this.setState({
            show: !this.state.show
        })
    }
 
    // 点击查看评论
    handleClick = ()=>{

        if(this.state.comment){
            return
        }

        let {id}=  this.props.match.params;
        $.ajax({
            type:'get',
            url:url+'/getcommentbyid?id='+id,
            success:(res)=>{
                // console.log(res.data)
                this.setState({
                    comment: res.data,
                    iscomment:true
                })

                // this.setState({
                //     arrcomment:res
                // })
            }
        })
    }

    render(){
        let {data,iscomment,comment} = this.state;

        if(data){
            return(
                <div className="zb-detail" >
                    {/* <h1> {this.props.match.params.id} </h1> */}
                    <HeaderCommon title='详细信息' />
                    <div className="img">
                        <img src={this.state.imgurl} alt=""/>
                        <span className="bargainSlogan" > {data.bargainSlogan} </span>
                    </div>
                    <div className="zb-wrapper">
                    
                        <div className='zb-desc'>
                            <p>
                                {this.state.title}
                                <span className="star" >★★★★★</span>
                            </p>
                        </div>
                        <div className="zb-price">
                            <span> ¥ {data.lowestPrice} </span>
                            <span>有效期至：{data.lowestDepartDate}</span>
                        </div>

                       
                            
                        <p className="intruduce" > {data.introductions} </p>                        

                        <div className="fenqi">
                            <p> {data.defaultStaging} </p>
                            <p onClick={this.handleFenqi} > 查看分期方案 〉 </p>
                        </div>   

                       {
                           this.state.show ?  <ul className="fenqifangan">
                           {
                               data.periods.map( ( item,index )=>{
                                   return <li key={index}> {index+1}.
                                       <span> {item.stagingPayDescription} </span>
                                       <span> {item.stagingHandingCharge} </span>
                                   </li>
                               } )
                           }
                       </ul> :''
                       }

                        <ul className="youhui">
                            {
                                data.promotionNameList.map( item =>(
                                    <li key={item}> {item} </li>  
                                ) )
                            }
                            </ul>
                        </div>  

                    
                         <div className="lookfor">
                            <Button 
                                onClick={this.handleClick}
                                className="btn" 
                                type="primary"> 查看评论 </Button>
                         </div>
                         {
                             iscomment && comment ? <Comment data={comment} /> 
                             : ''
                         }
                   
    
                </div>
            )
        }else{
            return(
                <Loading/>
            )
        }
        
    }
}

export default Detail;