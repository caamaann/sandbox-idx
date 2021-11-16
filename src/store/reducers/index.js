import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import procedure from "./procedure";

const rootReducer = combineReducers({
  form: formReducer,
  procedure,
});

export default rootReducer;
