import { useDispatch } from "react-redux";
import {
  showAccountMenu,
  showAddTaskModal,
  showSignInModal,
  toggleSideMenu,
} from "../../redux/layoutSlice";
import { AppBar, IconButton, Toolbar, Avatar } from "@mui/material";
// import { MenuIcon } from "@mui/icons-material/";
import Search from "./Search";
import { useState } from "react";
import AccountMenu from "../auth/AccountMenu";

const Header = () => {
  const [accountMenuAnchor, seAccountMenuAnchor] = useState(null);

  const open = Boolean(accountMenuAnchor);

  const openAccountMenu = (event) => {
    seAccountMenuAnchor(event.currentTarget);
  };

  const closeAccountMenu = () => {
    seAccountMenuAnchor(null);
  };

  const dispatch = useDispatch();
  return (
    <>
      <AppBar
        position="sticky"
        color="primary"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
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

            <IconButton
              onClick={openAccountMenu}
              size="small"
              sx={{ ml: 2 }}
              aria-haspopup="true"
            >
              <Avatar sx={{ width: 32, height: 32 }}>KS</Avatar>
            </IconButton>

            {/* <IconButton
            color="inherit"
            aria-label="login"
            size="small"
            onClick={() => {
              console.log("clicked");
              dispatch(showSignInModal());
            }}
          >
            <i className="fa-regular fa-user" />
          </IconButton> */}
          </div>
        </Toolbar>
      </AppBar>
      {
        <AccountMenu
          open={open}
          anchorEl={accountMenuAnchor}
          closeMenu={closeAccountMenu}
        />
      }
    </>
  );
};

export default Header;
