import Search from "./Search";

const Header = (props) => {
  const { toggleAddTaskModal, toggleSideMenu } = props.functions;
  return (
    <header className="header">
      <div className="header__controls-left">
        <button onClick={toggleSideMenu}>
          <i className="fa-solid fa-bars" />
        </button>
        <button>
          <i className="fa-solid fa-house" />
        </button>
        <Search />
      </div>
      <div className="header__controls-right">
        <button onClick={toggleAddTaskModal}>
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
