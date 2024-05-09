import React, { useState } from 'react';
import { useReducer } from 'react';
import './App.css';

function App() {
  const [taskArr, setTaskArr] = useState([]);
  const [task, setTask] = useState('');
  const [toggleContent, setToggleContent] = useState(false);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskArr([...taskArr, task]);
    setTask('');
  };

  const handleToggle = (index) => {
    setToggleContent(!toggleContent);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button type="submit">Add Task</button>
      </form>
      <div>
        {taskArr.map((task, index) => (
          <div key={index}>
            <h1>{toggleContent ? 'This is a hidden content' : task}</h1>
            <button onClick={() => handleToggle(index)}>Toggle</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
