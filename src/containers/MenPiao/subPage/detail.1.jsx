import React, {Component} from 'react';
import {getInfoByKey} from '../../../actions/getinfobykey'
import { connect } from 'react-redux';

import './detai.css'

class TicketDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    initFn = ()=>{
        let arrData = this.props.data;       
        // 刷新之后无数据哦
        let {id} = this.props.match.params;
        let arr2 = arrData.find( (item)=>{
            return item.id = id;
        });
        if(!arr2){
            return;
        }
        return arr2;
    }

    changeUrl = (url)=>{
        
       console.log(url)
       return url;
    }

    

    render(){
       console.log( this.changeUrl('hao123.com'));

        let data = this.initFn();
        if(!data){
            return(
                <div>222</div>
            )
        }
        console.log(data);
       

        return(
            <div className="menpiao-wrapper">
                <div className="main" >
                    <div className="left">
                        <img src={data.imgURL} alt=""/>
                        <div className="bookingTag">
                            {data.bookingTag.label}
                        </div>
                    </div>
                    <div className="right">
                        <h2> {data.name} ( {data.level} ) </h2>
                        <div>
                            <p> <span className='rmb'>¥</span> 
                                {data.qunarPrice} 
                            </p>
                            <p>
                                {data.commentCount}条评论
                            </p>
                        </div>
                        <p> {data.hybridAddress} </p>
                        <p> {data.sightSimpleDesc} </p>
                    </div>
                </div>

                <div className="detail-info" >
                    <p> {data.addressDetail} </p>
                    <p> {data.openTime} </p>
                    <div>
                        {
                            data.tagList.map( item =>(
                                <p key={item.label} >            
                                    {item.label}
                                </p>
                            ))
                        }
                    </div>

                    <div>
                        {
                            data.priceList.map( item=>(
                                <div key={item.ticketTypeId} >
                                    <p>{item.ticketTypeName}</p>
                                    <p>
                                        <span className="rmb">¥ </span> {item.qunarPrice}
                                    </p>
                                    {/* <a href={item.productDetailScheme}></a> */}
                                </div>
                            ) )
                        }
                    </div>
                    <a href={ this.changeUrl(data.scheme) }>订购----</a>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        data:state.getinfobykey,
        userinfo : state.userinfo
    }
}


export default connect(mapStateToProps,null)(TicketDetail);