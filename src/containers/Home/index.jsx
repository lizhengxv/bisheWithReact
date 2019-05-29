import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import Logo from '../../statics/images/logo.jpg';
import Logo1 from '../../statics/images/logo2.png'
import './home.css'


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(

         

               <div className="home">

                   <div className="title" > 
                        <div className="logo" >
                            <img src={Logo1} alt=""/>
                            <p> xxx公司招聘网</p>
                        </div>
                        <div>
                            <span>
                                <Link to={'/login'}>登录</Link> 
                            </span>
                            &nbsp;/&nbsp;
                            <span>
                                <Link to={'/register'}>注册</Link> 
                            </span>
                           
                        </div>
                   </div>

                    <div>
                        <img src={Logo} alt=""/>
                    </div>
               </div>


              
          
         
        )
    }
}

export default Home;