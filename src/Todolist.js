import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./todolist.css"

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);
  const [showNotCompleted, setShowNotCompleted] = useState(true);

  useEffect(() => {
    // Fetch todos from the API endpoint
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const handleAddTask = () => {
    if(newTask==""){
        alert("The task is empty")
    }
    else if (newTask.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        title: newTask,
        completed: false,
      };
      setTodos([newTodo, ...todos]);
      setNewTask('');
    }
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleEditTask = (id, newTitle) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTask = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completedTodos = todos.filter(todo => todo.completed);
  const notCompletedTodos = todos.filter(todo => !todo.completed);

  return (
    <div>
      <h1 className='heading'>Todo App</h1>
      <div className='container'>
      <div>

        <input className='input'
          type="text"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className='button' onClick={handleAddTask}>Add Task</button>


        <div className='checkboxes'>
        <label>
          Show Completed</label>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
        /><br></br>
        <label htmlFor=''>Show Not Completed</label>
        <input
          type='checkbox'
          checked={showNotCompleted}
          onChange={() => setShowNotCompleted(!showNotCompleted)}
        />
        </div>


        
        <ul>
          {showCompleted &&
            completedTodos.map(todo => (
              <li key={todo.id}>
                <span style={{ textDecoration: 'line-through' }}>{todo.title}</span><br></br>
                <button onClick={() => handleToggleComplete(todo.id)}>
                  {todo.completed ? 'Done' : 'Not Done'}
                </button>
                <button onClick={() => handleEditTask(todo.id, prompt('Enter new title:', todo.title))}>
                  Edit
                </button>
                <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
              </li>
            ))}
        </ul>
     
      <div>
        
        <ul>
          {showNotCompleted &&
            notCompletedTodos.map(todo => (
              <li key={todo.id}>
                <span>{todo.title}</span><br></br>
                <button onClick={() => handleToggleComplete(todo.id)}>
                  {todo.completed ? 'Done' : 'Not Done'}
                </button>
                <button onClick={() => handleEditTask(todo.id, prompt('Enter new title:', todo.title))}>
                  Edit
                </button>
                <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
      </div>
    </div>
    </div>
  );
};

export default TodoApp;

