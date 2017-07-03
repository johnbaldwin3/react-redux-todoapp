import { FILTER_TODOS } from '../actions/actions';

const toggleReducer = (state = 'showAll', action) => {
  switch (action.type) {
    case FILTER_TODOS:
      return action.payload
    default:
      return state;
  }
}

export default toggleReducer;
