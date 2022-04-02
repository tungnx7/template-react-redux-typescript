import { connect } from "react-redux";
import React, { Component } from "react";
import { DatePicker, Space } from 'antd';
import moment from 'moment';


interface Props {}

interface State {}

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

const customFormat = (value:any) => `custom format: ${value.format(dateFormat)}`;

const customWeekStartEndFormat = (value:any) =>
  `${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value)
    .endOf('week')
    .format(weekFormat)}`;

export class DatePickerDemo extends Component<Props, State> {
  state = {};

  render() {
    return <Space direction="vertical" size={12} >
      <RangePicker />
    </Space>;
  }
}

export default DatePickerDemo;
