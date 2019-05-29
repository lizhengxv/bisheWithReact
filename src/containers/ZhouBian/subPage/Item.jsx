import React, {Component} from 'react';

import {Link} from 'react-router-dom';




class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

   

    render(){
        let data = this.props.data
        return(
           <Link to={ '/home/zhoubian/'+data.prdId+'//xx'+encodeURI(data.prdName)+'/xx/'+data.prdImgUrl}  > 
                <div className="zhoubian" >
                    <div>
                        <div className='zb-nav' >
                            <img className='zb-img' src={data.prdImgUrl}  alt=""/>
                            <span className="price" > <span>¥</span> {data.prdSalePrice} </span>
                            <p className='tag' > <span>
                                    {data.prdPeople}人出游
                                </span> 
                                <span>
                                    { Number(data.satisfaction)*100} % 满意度
                                </span>
                            </p>
                        </div>
                    
                    </div>
                    <p className='desc over'> {data.prdName} </p>
                    <p className='prdSubtitle over' > { data.prdSubtitle } </p>
                    <div className='prdFeature' >  
                        <p className="border" >
                            {data.prdFeature}
                        </p>
                        <p className="info" > 
                            <span> {data.prdClassBrandName} | {data.prdDepartCity}出发 </span>
                        </p>
                    </div>
                
                    <p className="comment over" >
                    <img src={data.headImgUrl} alt=""/>
                    <span> {data.comment} </span>
                    </p>
                    
                </div>
           </Link>
        )
    }
}

export default Item;