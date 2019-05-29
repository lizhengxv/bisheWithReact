import React from 'react'
import { Icon } from 'antd-mobile';

import touxiang from '../../static/images/touxiang.jpg'

import './userinfo.css'

function UserInfo(props){

    return(
        <div className="wrapper-userinfo" >
            <div className="logout" onClick={props.handleLogout} >
                <Icon type='cross-circle' size='xxs' />
            </div>
            <div>
                <img className="touxiang" src={touxiang} alt=""/>
            </div>
             <p className="userinfo" > 
                 <i className="icon-user"></i>
                 &nbsp;
                 <span>{props.userphone} </span> 
             </p>
             <p className="userinfo" >
                <i className="icon-map-marker"></i>
                &nbsp;
                 <span>{props.usercity}</span>
             </p>
        </div>
    )
}

export default UserInfo;