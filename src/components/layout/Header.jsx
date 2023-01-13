import { useDispatch } from "react-redux";
import { showAddTaskModal, toggleSideMenu } from "../../redux/layoutSlice";
import { AppBar } from "@mui/material";
import Search from "./Search";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <AppBar position="sticky" color="primary" style={{ backgroundColor: "" }}>
      <div className="header__controls-left">
        <button onClick={() => dispatch(toggleSideMenu())}>
          <i className="fa-solid fa-bars" />
        </button>
        <button>
          <i className="fa-solid fa-house" />
        </button>
        <Search />
      </div>
      <div className="header__controls-right">
        <button onClick={() => dispatch(showAddTaskModal())}>
          <i className="fa-solid fa-plus" />
        </button>
        <button>
          <i className="fa-regular fa-user" />
        </button>
      </div>
    </AppBar>
  );
};

export default Header;
