import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import Header from "./components/layout/Header";
import SideMenu from "./components/layout/SideMenu";
import "./styles.scss";
import Main from "./components/layout/Main";
import { useState } from "react";

let database;

const firebaseConfig = {
  databaseURL: "https://todolist-76f05-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

database = getDatabase(app);

function App() {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);
  const toggleSideMenu = () => {
    setSideMenuIsOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Header toggleSideMenu={toggleSideMenu} />
      <div>
        {sideMenuIsOpen && <SideMenu />}
        <Main />
        {/* <Modal /> */}
      </div>
    </div>
  );
}

export default App;
