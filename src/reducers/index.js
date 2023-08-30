// reducers/index.js
import { combineReducers } from 'redux';
import Todoreducer from './Todoreducer';

const rootReducer = combineReducers({
  todoitems: Todoreducer,
  // Add other reducers here if needed
});

export default rootReducer;
