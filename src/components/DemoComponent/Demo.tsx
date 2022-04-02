import { connect } from "react-redux";
import React, { Component } from "react";

type Props = { text: string };

type State = {};

export class Demo extends Component<Props, State> {
  render() {
    return (
      <div
        onClick={() => {
          this.setState({ text: "ádasdasd" });
        }}
      >
        {this.props.text}
      </div>
    );
  }
}

export default Demo;
