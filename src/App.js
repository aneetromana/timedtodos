import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, TextField, Button, List } from '@mui/material';
import Task from './components/Task.js';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');

  const addTask = () => {
    if (newTaskName) {
      setTasks([...tasks, newTaskName]);
      setNewTaskName('');
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Task Manager</Typography>
        </Toolbar>
      </AppBar>
      <TextField
        label="New Task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <Button onClick={addTask}>Add Task</Button>
      <List>
        {tasks.map((task, index) => (
          <Task key={index} taskName={task} />
        ))}
      </List>
    </div>
  );
};

export default App;
