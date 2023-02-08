import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import ToDoSecondaryControls from "./ToDoSecondaryControls";
import { useState } from "react";

const ToDo = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ListItem
      sx={{ pr: "unset" }}
      secondaryAction={<ToDoSecondaryControls fadeIn={isHovered} />}
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <ListItemButton>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

export default ToDo;
