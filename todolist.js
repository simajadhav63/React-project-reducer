// src/components/TodoList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTodoContext } from '../context/todocontext';

const TodoList = () => {
  const { state } = useTodoContext();

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Todo</Link>
    </div>
  );
};

export default TodoList;
