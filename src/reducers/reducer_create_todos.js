import { CREATE_TODO_ITEM, TOGGLE_TODO } from '../actions/actions';

const todoItems = (state = [], action) => {
  console.log(action.payload, "actionpayload");
  switch(action.type) {
    case CREATE_TODO_ITEM:
      return [
        ...state,
        {
          id: action.id,
          todoText: action.payload,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo) =>

        (todo.id === action.payload)
        ? {...todo, completed: !todo.completed}
        : todo
      )
    default:
      return state;
  }
}

export default todoItems;
