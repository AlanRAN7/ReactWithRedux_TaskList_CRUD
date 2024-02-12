import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log("Tasks desde TaskList: ", tasks);
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>{task.completed ? "Completed" : "Pending"}</p>
        </div>
      ) )}
    </div>
  )
}

export default TaskList
