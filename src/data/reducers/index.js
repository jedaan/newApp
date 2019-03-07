import { combineReducers } from "redux"
import dataReducer from "./user_reducer";
import registerReducer from './register_reducer';

const rootReducer = combineReducers({
  userData: dataReducer,
  registerData: registerReducer
});

export default rootReducer
