// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TodoProvider } from './context/todocontext.js';
import TodoList from './components/todolist.js';
import TodoForm from './components/todoform.js';
import TodoDetail from './components/tododetail.js';
import Navbar from './components/navbar.js';
import DarkModeToggle from './components/DarkModeToggle.js';

import './App.css'; // Import CSS file

function App() {
  return (
    
    <TodoProvider>
      <Router>
        <div className="container"> {/* Wrap everything inside a container */}
          <Navbar />
          <DarkModeToggle />
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route path="/add" component={TodoForm} />
            <Route path="/todo/:id" component={TodoDetail} />
          </Switch>
        </div>
      </Router>
    </TodoProvider>
  );
}

export default App;
