// src/components/TodoForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTodoContext } from '../context/todocontext';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();
  const { dispatch } = useTodoContext();

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title,
      description,
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    history.push('/');
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
