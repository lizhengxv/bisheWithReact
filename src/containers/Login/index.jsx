import React, {Component} from 'react';
import {connect} from 'react-redux';

import HeaderCommon from '../../components/Header/HeaderCommon';
import LoginComponent from './subPage/LoginComponent';

import LocalStorage from '../../util/localStore'

import './login.css'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin:false
        }
    }

    // 检查是否登录
    checkIsLogin = ()=>{

    //   查看本地没有有用户信息，如果有，更新到redux
      let user = localStorage.getItem('user');
      if(user){
            this.props.setUserInfo(user);
            this.setState({
                isLogin:true
            })
            this.props.history.push('/user')
      }
      else if(!user){
         this.props.history.push('/login')
      }
      else{
            const userphone = this.props.userphone;
            if(userphone){
                this.setState({
                    isLogin:true
                })
                this.props.history.push('/user')

            }else{
                this.setState({
                    isLogin:false
                })
            }
            // 如果d登录了，而且是从收藏页返回的登录页，不去用户中心，返回首页吧
            if( userphone && this.props.match.params.detail){
                this.props.history.push('/');
            }
      }
    }

    componentDidMount(){
        this.checkIsLogin();   
        // console.log('登录页-----',this.props.match.params.id, this.props.match.params.detail);
    }

    // 点击登录事件
    getUserPhone = ( phone )=>{
        this.props.setUserInfo(phone);

        // 登录成功之后，把用户存在localstorage
        LocalStorage.setItem('user',phone);


        // 根据路由判断  如果是从收藏页跳的， 就跳回收藏页
       
        let {detail,id} = this.props.match.params;
        if(detail){
        //    如果是从收藏页跳过来的，回到收藏页去
            this.goSomePage(`/detail/${detail}/${id}`);

        }
         //如果是从首页点的登录，就跳到用户页
        else{
            this.goSomePage('/user');
        }
       

       
    }
    goSomePage(path){
        // 记住push
        // this.props.history(path)
      this.props.history.push(path)
    }

    render(){
        return(
            <div>
                {
                    // isLogin ? <div> </div> 
                    // :
                    <div>
                        <HeaderCommon title="登录" />
                        <LoginComponent getUserPhone={this.getUserPhone} />
                    </div>
                }               
            </div>
        )
    }
}


function mapStateToProps( state ){
    return{
        userphone:state.userphone
    }
}

function mapDispatchToProps(dispatch){
    return{
        setUserInfo : (data)=>{
            dispatch( {
                type:"SET_USER_INFO",
                data
            } )
        }
    }
}

export default connect( mapStateToProps,mapDispatchToProps )(Login);