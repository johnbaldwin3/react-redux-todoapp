import React from 'react'


const TodoItem = ({ onClick, completed, todoText }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {todoText}
  </li>
)

export default TodoItem;
