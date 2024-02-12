import "./App.css";
import {
  useDispatch, //Para hacer algo
  useSelector, //Para seleccionar algo
} from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function App() {
  // const tasksState = useSelector((state) => state.tasks); //Seleccionar el estado de las tareas
  // console.log(tasksState);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
