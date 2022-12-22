import axios from "axios";
import ToDo from "./ToDo";
import { useState } from "react";
import { useEffect } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get("https://todolist-76f05-default-rtdb.firebaseio.com/todos.json")
      .then((response) => response.data)
      .then((data) => {
        Object.keys(data).forEach((key) => {
          const fetchedTasks = { text: data[key].text };
          setTasks((prevTasks) => [...prevTasks, fetchedTasks]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(tasks);
  return (
    <div className="task__container">
      <div className="task__container-header">
        <h2>Project Name</h2>
        <i className="fa-solid fa-ellipsis" />
      </div>
      {tasks.map((task) => (
        <ToDo text={task.text} key={task.text} />
      ))}
    </div>
  );
};

export default ToDoList;
