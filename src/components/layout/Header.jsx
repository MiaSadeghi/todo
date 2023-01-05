import Search from "./Search";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__controls-left">
        <button onClick={props.toggleSideMenu}>
          <i className="fa-solid fa-bars" />
        </button>
        <button>
          <i className="fa-solid fa-house" />
        </button>
        <Search />
      </div>
      <div className="header__controls-right">
        <button>
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
