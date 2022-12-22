import AddTask from "../tasks/AddTask";
import ToDoList from "../tasks/ToDoList";

const Main = () => {
  return (
    <section className="project-section">
      <AddTask />
      <ToDoList />
    </section>
  );
};

export default Main;
