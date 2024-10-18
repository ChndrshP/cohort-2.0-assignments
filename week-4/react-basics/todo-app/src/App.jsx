import React, { useState } from 'react'
import AddTodo  from './components/AddTodo'
import RenderTodo from './components/RenderTodo'

function App() {

  const [todos, setTodos] = useState([]);

  const addTask = (title, description) => {
    const newTask = {
      index: todos.length + 1,
      title,
      description,
      completed: false,
    };
      setTodos([...todos, newTask]);
  }

  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo) => {
        todo.index === index ? {...todo, completed: !todo.completed} : todo;
      })
    );
  };

  return (
    <div className="App">
      <AddTodo addTask={addTask}/>
      <RenderTodo todos={todos} toggleComplete={toggleComplete}/>
    </div>
  )
}

export default App
