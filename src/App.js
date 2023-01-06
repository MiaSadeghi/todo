import Header from "./components/layout/Header";
import SideMenu from "./components/layout/SideMenu";
import "./styles.scss";
import Main from "./components/layout/Main";
import { useState } from "react";
import AddTask from "./components/tasks/AddTask";
import Parse from "parse";

Parse.initialize(
  "LnrbFsNNOsViGRsQ5mdOVsCQYTz58nTxbqZmQSkr",
  "Ohmle0KusWBYdDCMu2ewE5b0lNwSgimYw4IW39GP",
);

Parse.serverURL = "https://parseapi.back4app.com";
function App() {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);
  const toggleSideMenu = () => {
    setSideMenuIsOpen((prevState) => !prevState);
  };

  const [addTaskModalIsOpen, setAddTaskModalIsOpen] = useState(false);
  const toggleAddTaskModal = () => {
    setAddTaskModalIsOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Header functions={{ toggleSideMenu, toggleAddTaskModal }} />
      <div>
        {sideMenuIsOpen && <SideMenu />}
        <Main />
        {addTaskModalIsOpen && <AddTask />}
      </div>
    </div>
  );
}

export default App;
