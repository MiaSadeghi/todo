import Header from "./components/layout/Header";
import SideMenu from "./components/layout/SideMenu";
import "./styles.scss";
import Main from "./components/layout/Main";
import AddTask from "./components/tasks/add-task/AddTask";
import Parse from "parse";
import { useSelector } from "react-redux";

Parse.initialize(
  "LnrbFsNNOsViGRsQ5mdOVsCQYTz58nTxbqZmQSkr",
  "Ohmle0KusWBYdDCMu2ewE5b0lNwSgimYw4IW39GP",
);

Parse.serverURL = "https://parseapi.back4app.com";

function App() {
  const sideMenuIsOpen = useSelector((state) => state.layout.sideMenuOpen);

  const addTaskModalIsOpen = useSelector(
    (state) => state.layout.addTaskModalOpen,
  );

  return (
    <div className="App">
      <Header />
      <div>
        {sideMenuIsOpen && <SideMenu />}
        <Main />
        {addTaskModalIsOpen && <AddTask />}
      </div>
    </div>
  );
}

export default App;
