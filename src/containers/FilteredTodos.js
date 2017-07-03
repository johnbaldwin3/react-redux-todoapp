import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';


const showFilteredTodos = (todoItems, selectedFilter ) => {
  switch(selectedFilter) {
    case 'showAll':
      return todoItems;
    case 'showCompleted':
      return todoItems.filter(t => t.completed);
    case 'showIncomplete':
      return todoItems.filter(t => !t.completed);
  }
}

const mapStateToProps = state => {
  return {
    todoItems: showFilteredTodos(state.todoItems, state.toggleReducer)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const FilteredTodos = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default FilteredTodos;
