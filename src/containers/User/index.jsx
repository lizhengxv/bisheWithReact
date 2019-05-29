import React, {Component} from 'react';
// import {Link} from 'react-router-dom'
import {Icon} from 'antd';

import './user.css'


class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[
                {id:1, type:'职位1', info:'xxxxxxxxxxxxxxxx',number:100,city:'城市1',time:'2019-04-04',jutiinfo:'巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦'},
                {id:2, type:'职位2', info:'xxxxxxxxxxxxxxxx',number:40,city:'城市1',time:'2019-04-14',jutiinfo:'巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦'},
                {id:3, type:'职位3', info:'xxxxxxxxxxxxxxxx',number:420,city:'城市1',time:'2019-04-24',jutiinfo:'巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦'},
                {id:4, type:'职位4', info:'xxxxxxxxxxxxxxxx',number:77,city:'城市1',time:'2019-02-04',jutiinfo:'巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦'},
                {id:5, type:'职位5', info:'xxxxxxxxxxxxxxxx',number:56,city:'城市1',time:'2019-04-04',jutiinfo:'巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦巴巴爸爸巴拉巴啦啦巴啦啦'},
              
            ],
            isShow:true,
            index:0
        }
    }

    handleClick = (i)=>{
        this.setState({
            isShow: !this.state.isShow,
            index:i
        })
    }

    render(){
        return(            
                <div className='user' >
                    <div className="user-info">
                        <p>
                            <Icon  className='smile-o' type='smile-o'/> 个人中心
                        </p>
                    </div>
                    
                    <div className="list-zhiye">
                        <ul>

                            {this.state.arr.map( (item,index) =>{
                                return  <li className="zhiye-list" >                                       
                                                 
                                                      <div className='zhiye-juti-info' >
                                                            <p> {item.type} </p>
                                                            <p> {item.info} </p>
                                                            <p> {item.type} </p>
                                                            <p> {item.number} </p>
                                                            <p> {item.city} </p>
                                                            <p onClick={this.handleClick.bind(this,index)} > {item.time} 
                                                                <Icon type="down" />
                                                            </p>
                                                      </div> 
                                                     {
                                                         this.state.isShow && this.state.index === index ?
                                                         <p className="jutiinfo" >
                                                             {item.jutiinfo}
                                                        </p>:''
                                                     } 
                                                   
                                                
                                            
                                      </li>
                            } )}

                        </ul>
                    </div>

                </div>

        )
    }
}

export default User;