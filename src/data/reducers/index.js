import { combineReducers } from 'redux';
import dataReducer from './user_reducer';
import registerReducer from './register_reducer';
import dbValidate from './db_validate';

const rootReducer = combineReducers({
  userData: dataReducer,
  registerData: registerReducer,
  dbValidate: dbValidate
});

export default rootReducer;
