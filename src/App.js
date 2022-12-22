import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import "./styles.scss";
import Main from "./components/layout/Main";

let database;

const firebaseConfig = {
  databaseURL: "https://todolist-76f05-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

database = getDatabase(app);
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Sidebar />
        <Main />
        {/* <Modal /> */}
      </div>
    </div>
  );
}

export default App;
