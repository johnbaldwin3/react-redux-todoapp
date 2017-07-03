import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({todoItems, toggleTodoClick}) => {
  console.log('this', todoItems);
  return (
    <ul>
      {todoItems.map( todo => (
        <TodoItem key={todo.id} {...todo} onClick={() =>{
          toggleTodoClick(todo.id)}} />
      ))}
    </ul>
  )
}


export default TodoList;
