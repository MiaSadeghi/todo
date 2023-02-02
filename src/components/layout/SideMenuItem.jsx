import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
const SideMenuItem = ({ title, icon }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ pl: "18px", pr: "18px" }}>
        <ListItemIcon sx={{ minWidth: "30px" }}>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

export default SideMenuItem;
