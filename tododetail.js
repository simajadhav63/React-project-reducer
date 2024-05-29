// src/components/TodoDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useTodoContext } from '../context/todocontext.js';


const TodoDetail = () => {
  const { id } = useParams();
  const { state } = useTodoContext();
  const todo = state.todos.find(todo => todo.id === parseInt(id));

  if (!todo) return <div>Todo not found!</div>;

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoDetail;
