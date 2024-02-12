import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = [
  {
    id: 1,
    title: "Learn React",
    description: "Learn React and become a pro!",
    completed: false,
  },
  {
    id: 2,
    title: "Learn Redux",
    description: "Learn Redux to complement React knowledge!",
    completed: false,
  },
];


export const taskSlice = createSlice({
  // El createSlice es identico a:
  // const [tasks, setTasks] = useStat([]);
  name: "tasks",
  // initialState: initialState,
  initialState,
  reducers: {
    addTask : (state, action) =>{
      // console.log(state, action);
      // console.log(action.type, action.payload);
      state.push(action.payload);
      // [...state, action.payload];
    }
  },
});
export const { addTask } = taskSlice.actions; //export the action
export default taskSlice.reducer; //export the reducer
