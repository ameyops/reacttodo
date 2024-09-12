import React from 'react';
import './TaskItem.css';



const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li>
      <span
        className={task.completed ? 'completed' : ''}
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.text}
      </span>
      {' '}
      <span>({task.completed ? 'Yes' : 'No'})</span>
      <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
