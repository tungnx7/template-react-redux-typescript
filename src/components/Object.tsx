import { connect } from "react-redux";
import React, { Component } from "react";
import { IObject } from "../model/reducers/object.model";
import { setObject } from "../reducers/objectReducer";

interface Props {
  children?: any;
  objectState: IObject;
  setObject: Function;
}

interface State {}

export class Object extends Component<Props, State> {
  state = {};

  render() {
    const { objectState } = this.props;
    if (objectState.show && objectState.object) {
      return <div></div>;
    } else {
      return this.props.children;
    }
  }
}

function mapStateToProps(state: any) {
  return {
    objectState: state.objectState,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setObject: (object: IObject) => dispatch(setObject(object)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Object);
