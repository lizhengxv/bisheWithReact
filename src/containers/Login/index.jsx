import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom'

import './login.css'

const FormItem = Form.Item;


class Login extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
               let {userName,password} = values;
               if(userName === 'jiajia'){
                    this.props.history.push('/admin')
               }else{
                   this.props.history.push('/users')
               }
          }
        });
      }

      componentDidMount(){
          console.log(this.props.history)
      }

      render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <div className="login" >
              <div>
                    <h2> 欢迎登录....... </h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住我</Checkbox>
                        )}
                        <a className="login-form-forgot">忘记密码</a>
                        &nbsp;
                        <Button type="primary" htmlType="submit"  style = {{ width:'100px' }}  className="login-form-button">
                            登录
                        </Button>
                        <br/>
                            <Link to={'/register'} >
                                <span>现在去注册</span>
                            </Link>
                        </FormItem>
                    </Form>
              </div>
          </div>
        );
      }
}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;