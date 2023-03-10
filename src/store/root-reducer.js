import { combineReducers } from 'redux';
import { userReducer } from './counter/counter.reducer';

const rootReducer = combineReducers({
  counter: userReducer,

});

export default rootReducer;
