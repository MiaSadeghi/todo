import ToDo from "./ToDo";
import { useState, useEffect } from "react";
import Parse from "parse";
import { Skeleton, Checkbox, FormControlLabel } from "@mui/material";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const Todos = Parse.Object.extend("Todo");
    const ProjectClass = Parse.Object.extend("Project");

    const targetProject = new ProjectClass({ objectId: "5ZmPXZR0U9" });

    const query = new Parse.Query(Todos);
    query.equalTo("projectId", targetProject);

    query.find().then((results) => {
      setTasks(results);
      setIsLoading(false);
    });
  }, []);

  console.log(tasks);
  return (
    <div className="task__container">
      <div className="task__container-header">
        <h2>Project Name</h2>
        <i className="fa-solid fa-ellipsis" />
      </div>
      {isLoading
        ? [1, 2, 3].map((_) => <ToDo decorative key={_} />)
        : tasks.map((task) => (
            <ToDo text={task.attributes.Name} key={task.id} />
          ))}
    </div>
  );
};

export default ToDoList;
