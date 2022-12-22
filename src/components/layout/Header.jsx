const Header = () => {
  return (
    <header className="header">
      <div className="header__left-controls">
        <button>
          <i className="fa-solid fa-bars" />
        </button>
        <button>
          <i className="fa-solid fa-house" />
        </button>
        <div>
          <i className="fa-solid fa-magnifying-glass" />
        </div>
      </div>
      <div className="header__right-controls">
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
