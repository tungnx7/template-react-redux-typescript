import React, { Component } from "react";

type Props = {changeText:Function};

type State = {};

class Demo2 extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <button onClick={()=>{this.props.changeText("abcsdfsdasdasdas")}}>abc</button>
      </div>
    );
  }
}

export default Demo2;
