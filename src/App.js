import "./App.css";
import AddTask from "./components/tasks/AddTask";
import ToDoList from "./components/tasks/ToDoList";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
let database;

const firebaseConfig = {
  databaseURL: "https://todolist-76f05-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

database = getDatabase(app);
function App() {
  return (
    <div className="App">
      <AddTask />
      <ToDoList />
    </div>
  );
}

export default App;
