import { useDispatch } from "react-redux";
import { showAddTaskModal, toggleSideMenu } from "../../redux/layoutSlice";
import { AppBar, IconButton, Toolbar } from "@mui/material";
// import { MenuIcon } from "@mui/icons-material/";
import Search from "./Search";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <div className="header__controls-left">
          <IconButton
            onClick={() => dispatch(toggleSideMenu())}
            color="inherit"
            aria-label="sidemenu"
            size="small"
            edge="start"
          >
            {/* <MenuIcon color="inherit" /> */}
            <i className="fa-solid fa-bars" />
          </IconButton>
          <IconButton color="inherit" aria-label="home" size="small">
            <i className="fa-solid fa-house" />
          </IconButton>
          <Search />
        </div>
        <div className="header__controls-right">
          <IconButton
            onClick={() => dispatch(showAddTaskModal())}
            color="inherit"
            aria-label="add task"
            size="small"
          >
            <i className="fa-solid fa-plus" />
          </IconButton>
          <IconButton color="inherit" aria-label="login" size="small">
            <i className="fa-regular fa-user" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
