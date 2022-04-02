import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

interface Props  {}

interface State  {}

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);


// const onSearch = value => console.log(value);

export class InputDemo extends Component<Props, State> {
  state = {}

  render() {
    return (
        <Space direction='vertical' >
            {/* <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /> */}
        </Space>
    )
  }
}

export default InputDemo;