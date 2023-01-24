import { Menu, ListItemText, MenuItem, ListItemIcon } from "@mui/material";
import {
  OutlinedFlagOutlined as OutlinedFlagOutlinedIcon,
  Flag as FlagIcon,
} from "@mui/icons-material";

const PriorityMenu = ({ anchorEl, open }) => {
  const prioritiesList = [
    { priority: 1, color: "error", icon: FlagIcon },
    { priority: 2, color: "warning", icon: FlagIcon },
    { priority: 3, color: "success", icon: FlagIcon },
    { priority: 4, color: "info", icon: OutlinedFlagOutlinedIcon },
  ];

  return (
    <Menu anchorEl={anchorEl} open={open}>
      {prioritiesList.map((p) => {
        const IconComponent = p.icon;

        return (
          <MenuItem key={p.priority}>
            <ListItemIcon>
              <IconComponent color={p.color} />
            </ListItemIcon>
            <ListItemText>Priority {p.priority}</ListItemText>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default PriorityMenu;
