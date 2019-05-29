import React ,{Component} from 'react';

import {Link} from 'react-router-dom';

class Item extends Component{
    render(){
        let data = this.props.data;
        let ticket = this.props.ticket || '';
        let price = data.priceList || [];
        let keyword = this.props.keyword || 'detail'
  
        return(
           <Link to={"/home/menpiao/"+keyword+"/"+data.name} >
                <div className="item-wrapper">
                    <div className="item-one">
                        <div className="item-letf">
                            <img src={data.imgURL} alt=""/>
                            {
                                data.bookingTag ?
                                <span className="tag"> {data.bookingTag.label} </span>
                                : <span></span>
                            }
                        
                        </div>
                        <div className="item-right">
                            <p className="title">
                                <span className="name"> {data.name}</span>
                                <span className="level"> ({data.level}) </span>
                            </p>
                            <div className="fenshu" >
                                <span>
                                <span className="score"  >{ data.sightCommentScore}</span> / 5
                                </span>
                                <span className="comment"> {data.commentCount} 条评论 </span>
                            </div>
                            <p>
                                <span className='rmb'>¥ </span>
                                <span className="money">{data.qunarPrice}</span>  起
                            </p>
                        </div>
                        <div className="address">
                            {data.address}
                        </div>
                    </div>
                            {/* 坑爹的数据  优化 */}
                    {
                        ticket && price.length > 0 ? <div>
                            <p className="ticket-price">
                                <span> {price[0].ticketTypeName} </span>
                                <span className='rmb' > <i className='rmb'>￥</i> {price[0].qunarPrice} </span>
                            </p>
                            {
                                price[1] ? <p className="ticket-price">
                                <span> {price[1].ticketTypeName} </span>
                                <span className='rmb' > <i className='rmb'>￥</i> {price[1].qunarPrice} </span>
                                </p>
                                :''
                            }
                            
                        </div>
                        : <div>
                            <p className="sight-desc" >
                                {data.sightSimpleDesc ? data.sightSimpleDesc:''}
                            </p>
                            <p className="open-time">
                                {data.openTime ? data.openTime:''}
                            </p>
                        </div>
                    }
                    
                </div>
            </Link> 
        )
    }
}

export default Item;