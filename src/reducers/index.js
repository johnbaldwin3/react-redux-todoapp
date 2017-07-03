import { combineReducers } from 'redux';
import toggleReducer from './reducer_toggleFilter';
import todoItems from './reducer_create_todos';

const rootReducer = combineReducers({
  todoItems,
  toggleReducer
});

export default rootReducer;
