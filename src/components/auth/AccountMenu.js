import {
  Tooltip,
  Typography,
  IconButton,
  Divider,
  ListItemIcon,
  MenuItem,
  Box,
  Avatar,
  Menu,
  ListItemText,
} from "@mui/material";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PaletteIcon from "@mui/icons-material/Palette";
import TimelineIcon from "@mui/icons-material/Timeline";

const AccountMenu = ({ open, anchorEl, closeMenu }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={closeMenu}
      onClick={closeMenu}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={closeMenu}>
        <ListItemIcon>
          <Avatar sx={{ width: "70px", height: "70px" }}>KS</Avatar>
        </ListItemIcon>
        <ListItemText>kimia.sadeghi@gmail.com</ListItemText>
      </MenuItem>
      <MenuItem onClick={closeMenu}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <Divider />
      <MenuItem onClick={closeMenu}>
        <ListItemIcon>
          <PaletteIcon fontSize="small" />
        </ListItemIcon>
        Theme
      </MenuItem>
      <MenuItem onClick={closeMenu}>
        <ListItemIcon>
          <TimelineIcon fontSize="small" />
        </ListItemIcon>
        Activity Log
      </MenuItem>
      <Divider />
      <MenuItem onClick={closeMenu}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default AccountMenu;
