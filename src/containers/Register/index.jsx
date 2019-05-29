import React, {Component} from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import {Link} from 'react-router-dom'
import Logo from '../../statics/images/logo.jpg'
import './register.css'


const FormItem = Form.Item;


class Register extends Component{
    state = {
        confirmDirty: false,
      };
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
      handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      }
      checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('两次输入的密码不一样');
        } else {
          callback();
        }
      }
      checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }
      render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 14,
              offset: 6,
            },
          },
        };
       
        return (
          <div className="register">
                <h2>xxx公司欢迎您注册......</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                    {...formItemLayout}
                    label="邮箱"
                    hasFeedback
                    >
                    {getFieldDecorator('email', {
                        rules: [{
                        type: 'email', message: 'E-mail 格式不正确',
                        }, {
                        required: true, message: '请输入你的 E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                    </FormItem>
                    <FormItem
                    {...formItemLayout}
                    label="密码"
                    hasFeedback
                    >
                    {getFieldDecorator('password', {
                        rules: [{
                        required: true, message: '请输入你的密码',
                        }, {
                        validator: this.checkConfirm,
                        }],
                    })(
                        <Input type="password" />
                    )}
                    </FormItem>
                    <FormItem
                    {...formItemLayout}
                    label="再次输入密码"
                    hasFeedback
                    >
                    {getFieldDecorator('confirm', {
                        rules: [{
                        required: true, message: '请再次输入你的密码',
                        }, {
                        validator: this.checkPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                    </FormItem>
                   
                  
                   

                    <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                    {getFieldDecorator('统一', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>我已阅读 <a>xx公司协议</a></Checkbox>
                    )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">注册</Button>
                    </FormItem>
                </Form>
          
          </div>
        );
      }
}

const WrappedRegistrationForm = Form.create()(Register);

export default WrappedRegistrationForm;