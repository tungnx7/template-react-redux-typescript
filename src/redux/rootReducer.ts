import { combineReducers } from "redux";
import { demoReducer } from "../reducers/demoReducer";
import { objectReducer } from "../reducers/objectReducer";

const rootReducer = combineReducers({
  objectState: objectReducer,
  demoState: demoReducer,
});

export { rootReducer };
