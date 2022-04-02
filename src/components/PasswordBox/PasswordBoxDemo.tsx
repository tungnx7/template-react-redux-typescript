import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import './PasswordBoxDemo.css';

interface Props  {}

interface State {}

export class PasswordBoxDemo extends Component<Props, State> {
  state = {}

  render() {
    return (
        <Space direction="vertical" className='passwordbox'   >
        <Input.Password placeholder="input password" className='passwordbox'  />
        <Input.Password className='passwordbox'
          placeholder="input password"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Space>
    )
  }
}

export default PasswordBoxDemo;