import Header from "./components/layout/Header";
import SideMenu from "./components/layout/SideMenu";
import "./styles.scss";
import Main from "./components/layout/Main";
import AddTask from "./components/tasks/add-task/AddTask";
import Parse from "parse";
import { useSelector } from "react-redux";
import AddProject from "./components/tasks/add-project/AddProject";

Parse.initialize(
  "LnrbFsNNOsViGRsQ5mdOVsCQYTz58nTxbqZmQSkr",
  "Ohmle0KusWBYdDCMu2ewE5b0lNwSgimYw4IW39GP",
);

Parse.serverURL = "https://parseapi.back4app.com";

function App() {
  const addTaskModalIsOpen = useSelector(
    (state) => state.layout.addTaskModalOpen,
  );
  const addProjectModalOpen = useSelector(
    (state) => state.layout.addProjectModalOpen,
  );

  return (
    <div className="App">
      <Header />
      <SideMenu />
      <Main />
      {addTaskModalIsOpen && <AddTask />}
      {addProjectModalOpen && <AddProject />}
    </div>
  );
}

export default App;
