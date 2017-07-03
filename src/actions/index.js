//import * as actions from './actions';
import { FILTER_TODOS, CREATE_TODO_ITEM, TOGGLE_TODO } from './actions';

//start id of todos at 0, add one each time a new one is created.
let newTodoId = 0;


export const toggleFilter = selectedFilter => {
  return {
    type: FILTER_TODOS,
    payload: selectedFilter,
  };
};

export const createTodo = todoText => {
  return {
    type: CREATE_TODO_ITEM,
    id: newTodoId++,
    payload: todoText,
  };
};

export const toggleTodo = id => {
  console.log('id here', id);
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};
