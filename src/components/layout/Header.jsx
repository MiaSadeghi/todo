import Search from "./Search";
import { useDispatch } from "react-redux";
import { showAddTaskModal, toggleSideMenu } from "../../redux/layoutSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="header">
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
    </header>
  );
};

export default Header;
