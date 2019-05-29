import React, {Component} from 'react';
import { Modal} from 'antd-mobile';

import HeaderCommon from '../../components/Header/HeaderCommon';
import UserInfo from '../../components/UserInfo';
import UserOrder from './subPage/UserOerder';

import  localStore  from '../../util/localStore';
import {logoutUserInfo} from '../../actions/userinfo'

import {connect} from 'react-redux';


const alert = Modal.alert;



class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }


    componentDidMount(){
        if(!this.props.userphone){
            this.props.history.push('/');
        }
        if(!localStorage.getItem('user')){
            this.props.history.push('/')
        }
   
       
    }
    
    // 退出功能
    handleLogout = ()=>{
        alert('注销', '确认退出???', [
            { text: '取消', onPress: () => {
                alert('取消')
            }},
            { text: '确认', onPress: () => {
                localStore.setItem('user','');
                this.props.patchLogOut();
                this.props.history.push('/login');
            } },
          ])
    }

    render(){
        return(
            <div>
                <HeaderCommon title='我的信息' backurl="/" ></HeaderCommon>
                <UserInfo {...this.props} handleLogout={this.handleLogout}  ></UserInfo>
                <UserOrder userphone={this.props.userinfo}></UserOrder>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        usercity:state.userinfo,
        userphone:state.userphone
    }
}

function mapDispatchToProps(dispatch){
    return{
        patchLogOut:()=>{
            dispatch( logoutUserInfo() )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);