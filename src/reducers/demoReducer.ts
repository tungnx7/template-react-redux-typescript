import { defaultDemo } from "../model/reducers/demo.model";

export const ACTION_TYPES = {
  DEMO: "DEMO",
};

interface IAction {
  type: String;
  payload: any;
}

const initialize = defaultDemo;

const demoReducer = (state = initialize, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.DEMO:
      state = action.payload;
      console.log(state)
      return state;
      
    default:
      return state;
  }
};

const setDemo = (data: string) => {
  return {
    type: ACTION_TYPES.DEMO,
    payload: data,
  };
};

export { demoReducer, setDemo };
