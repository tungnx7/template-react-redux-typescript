import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

import "./FormLogin.css";

interface Props {}

interface State {}



const onFinish = (values:any) => {
    console.log("Success", values)
}

const onFinishFailed = (values:any) => {
    console.log('Failed:')
}

export class FormLogin extends Component<Props, State> {
  state = {}

  render() {
    return (
        <Form className='form'
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default FormLogin;