import React, {Component} from 'react';
import $ from 'jquery';

import { List, InputItem, WhiteSpace,Toast, Button} from 'antd-mobile';

const url = 'http://127.0.0.1:8080/home/login'

class LoginComponent extends Component{
    state = {
        hasError: false,
        value: '',
        password:'',
        legitimate:0
      }
      onErrorClick = () => {
        if (this.state.hasError) {
          Toast.info('手机号码不正确');
        }
      }
      onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
          this.setState({
            hasError: true,
          });
        } else {
          this.setState({
            hasError: false,
          });
        }
        this.setState({
          value,
        });
      }

      onChangePassWord = (password)=>{
        this.setState({
            password
        })
      }

      handleLogin = ()=>{
          let {value,password} = this.state;
          if(value && password){


            $.ajax({
              type:'POST',
              url,
              data:{
                  user:value,
                  password:password
              }
            })


              this.props.getUserPhone(this.state.value);
              this.setState({
                legitimate:1
              })
          }else{
              this.setState({
                legitimate:2
              })
              return
          }
         
      }

      render() {
        return (
          <div >
            <List renderHeader={() => ' '}>
                <InputItem
                    type="phone"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange}
                    value={this.state.value}
                >手机号码</InputItem>
            <WhiteSpace />
            <InputItem
                clear
                placeholder="点击发送验证码"
                onChange={this.onChangePassWord}
                value={this.state.password}
                ref={el => this.inputRef = el}
            >验证码</InputItem>
            <WhiteSpace />
            <WhiteSpace />
            <WhiteSpace />
            {
              this.state.legitimate === 2 ? <p>请输入手机号或验证码..... </p> : <p> </p>
            }
            <WhiteSpace />
            <Button onClick={this.handleLogin} type="primary">登录</Button>

            </List>
          </div>
        );
      }
}

export default LoginComponent;