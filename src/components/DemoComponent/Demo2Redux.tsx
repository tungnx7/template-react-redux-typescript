import React, { Component } from "react";
import { connect } from "react-redux";
import { setDemo } from "../../reducers/demoReducer";
import { store } from "../../redux/store";

type Props = { setDemo: Function };

type State = {};

class Demo2Redux extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <button
          onClick={() => {
            // store.dispatch({ type: "DEMO", payload: "ádasdsda" });
            // store.dispatch(setDemo('đâsdasdas'))
            this.props.setDemo("đâsdas")
          }}
        >
          abc
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => {
  return {
    setDemo: (data: string) => dispatch(setDemo(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo2Redux);
