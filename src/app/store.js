import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/taskSlice';
// import tastksReducer from "../"

const store = configureStore({
    reducer: { //setStates for the store
        tasks: tasksReducer
    }
})

export default store; //export the store