import React, { useState } from 'react';
import { Checkbox, ListItem, ListItemText } from '@mui/material';

const Task = ({ taskName }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [completionTime, setCompletionTime] = useState('');
  const creationTime = new Date().toLocaleTimeString();

  const handleCheck = () => {
    setIsCompleted(!isCompleted);
    if (!isCompleted) {
      setCompletionTime(new Date().toLocaleTimeString());
    }
  };

  return (
    <ListItem>
      <Checkbox checked={isCompleted} onChange={handleCheck} />
      <ListItemText 
        primary={taskName} 
        secondary={`Created at: ${creationTime}${isCompleted ? `, Completed at: ${completionTime}` : ''}`} 
      />
    </ListItem>
  );
};

export default Task;
