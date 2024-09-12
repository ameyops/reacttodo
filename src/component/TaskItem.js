import React from 'react';
import './TaskItem.css';
const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li>
      <span
         
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.text}
      </span>
      {' '}
      <span>{task.completed ? 'Yes  ' : 'No  '}</span> 
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
