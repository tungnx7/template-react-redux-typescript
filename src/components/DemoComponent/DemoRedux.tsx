import { connect } from "react-redux";
import React, { Component } from "react";

type Props = { demoState: string };

type State = {};

class DemoRedux extends Component<Props, State> {
  render() {
    console.log(this.props.demoState);
    return <div>{this.props.demoState}</div>;
  }
}

const mapStateToProps = (state: any) => {
  return { demoState: state.demoState };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);
