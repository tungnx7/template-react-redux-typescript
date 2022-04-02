import { defaultObject, IObject } from "../model/reducers/object.model";

export const ACTION_TYPES = {
  OBJECT: "OBJECT",
};

interface IAction {
  type: String;
  payload: any;
}

const initialstate: IObject = defaultObject;

const objectReducer = (state = initialstate, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.OBJECT:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

const setObject = (object: IObject) => {
  return {
    type: ACTION_TYPES.OBJECT,
    payload: object,
  };
};

export { objectReducer, setObject };
