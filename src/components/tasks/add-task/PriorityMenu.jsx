import { Menu, ListItemText, MenuItem, ListItemIcon } from "@mui/material";
import {
  OutlinedFlagOutlined as OutlinedFlag,
  Flag,
} from "@mui/icons-material";

const PriorityMenu = ({
  anchorEl,
  open,
  closePriorityMenu,
  selectPriority,
}) => {
  const prioritiesList = [
    { priority: 1, color: "error", icon: Flag },
    { priority: 2, color: "warning", icon: Flag },
    { priority: 3, color: "success", icon: Flag },
    { priority: 4, color: "info", icon: OutlinedFlag },
  ];

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={closePriorityMenu}>
      {prioritiesList.map((p) => {
        const IconComponent = p.icon;

        return (
          <MenuItem
            key={p.priority}
            onClick={() => {
              selectPriority(p.priority);
            }}
          >
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
