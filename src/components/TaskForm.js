import React, { useState } from "react";
// Lo bueno es poder usar el useSelector desde aquí porque ya está importado desde el padre que es "App.js"
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid} from "uuid";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.name, e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(task);
    // dispatch(addTask("mi parametro"));
    // dispatch(addTask(task));
    dispatch(addTask({
      ...task,
      id: uuid(),
    }));
  };
  const stateTasks = useSelector((state) => state.tasks);
  // console.log("StateTasks desde TaskForm: ", stateTasks);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="title"
          onChange={handleChange}
        />
        <textarea
          placeholder="description"
          name="description"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
