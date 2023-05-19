import React from 'react';
import TodoItem from './TodoItem';

export default function Todos({ todos, onDelete }) {
  return (
    <div className='container'>
      <h3 className="display-3 text-center">Todo's List</h3>
     {todos.length===0? <h3 className='container text-center display-4 bg-dark text-light rounded'>No todos to display</h3>:todos.map(todo => {
          return <TodoItem todo={todo} onDelete={onDelete} />
        })}
     
    </div>
  );
}
