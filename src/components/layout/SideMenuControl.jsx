import { ListItemIcon, Fade } from "@mui/material";
import Add from "@mui/icons-material/Add";
import ExpandMore from "@mui/icons-material/ExpandMore";

const sharedStyles = {
  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
  minWidth: "unset",
  height: "20px",
  m: "auto 0",
  transition: "all 0.15s ease-in",
  borderRadius: "5px",
  p: "3px",
  ml: "3px",
};

const SideMenuChevron = ({ fadeIn, toggleFn, isToggled }) => {
  const rotate = isToggled ? "rotate(0deg)" : "rotate(90deg)";
  return (
    <ListItemIcon
      sx={{
        ...sharedStyles,
      }}
      onClick={toggleFn}
    >
      <Fade in={fadeIn}>
        <ExpandMore
          fontSize="small"
          sx={{ transform: rotate, transition: "all 0.3s ease-in" }}
        />
      </Fade>
    </ListItemIcon>
  );
};

const SideMenuAdd = ({ fadeIn, onClick }) => {
  return (
    <ListItemIcon sx={sharedStyles} onClick={onClick}>
      <Fade in={fadeIn}>
        <Add fontSize="small" />
      </Fade>
    </ListItemIcon>
  );
};

export { SideMenuAdd, SideMenuChevron };
