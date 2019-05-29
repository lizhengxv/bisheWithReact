import React from 'react';

import '../user.css'

function Item(props){

    let data = props.data

    return(
        <div className="user-order-item">
           <div className="order-title" >
               <p className="left">
                    {data.title}&nbsp;〉
               </p>
                {
                data.complete ? <p className='complete' > 交易完成 </p> 
                : 
                 <p className="cancel" >订单取消</p>
                } 
               
           </div>
           <div className="order-content">
                <div className="item-left">
                    <img src={data.image} alt=""/>
                </div>
                <div className="item-desc">
                    <p>
                        {
                            data.desc
                        }
                    </p>
                </div>
                <div className="item-price">
                    <p>
                        <span className="rmb" >¥ </span>{ data.price}
                    </p>
                    <p>
                        {data.discount} 折
                    </p>
                </div>
           </div>
           <div className="btn-comment">
                <button> 评  价 </button>
           </div>
        </div>
    )
}

export default Item;