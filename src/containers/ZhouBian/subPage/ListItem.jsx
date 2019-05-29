import React, {Component} from 'react';

import Modal from '../../../components/Modal'


import './listitem.css'

class ListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        let data = this.props.data;
        return(
            <div className="comment-item" >
               <div className="c-item-title" >
                    <p className='user' >
                        <span>  <i className="icon-user"></i> &nbsp;
                            {data.realName}
                        </span>&nbsp;&nbsp;
                        <span className='compName' > {data.compName} </span>
                    </p>
                    <p className='compName' >
                        {data.travelTypeName}
                    </p>
               </div>
               <div className="comment-wrapper">
                    <div>
                        <p className="remarkTime" >
                            {data.remarkTime}
                        </p>
                            <div className='content' >
                                {data.content}
                            </div>

                            {/* 用户晒图 */}
                            <div className="user-img-wrapper">
                                <ul className='user-img'>
                                    {
                                        data.images.map( (item,index)=>{
                                            return <li key={index} >
                                                {/* <img src={item.thumbUrl}  alt=""/> */}
                                                <Modal imgurl={item.thumbUrl} 
                                                       imgurl2={item.originalUrl} />
                                            </li>
                                        } )
                                    }
                                </ul>
                            </div>
                    </div>
               </div>
              
            </div>
        )
    }
}

export default ListItem;