import More from "@mui/icons-material/MoreHoriz";
import Edit from "@mui/icons-material/Edit";
import Date from "@mui/icons-material/DateRange";
import Comment from "@mui/icons-material/Comment";
import { Fade, IconButton } from "@mui/material";

const controls = [
  { name: "Edit", icon: <Edit fontSize="small" /> },
  { name: "Set Due Date", icon: <Date fontSize="small" /> },
  { name: "Comment", icon: <Comment fontSize="small" /> },
  { name: "More", icon: <More fontSize="small" /> },
];
const ToDoSecondaryControls = ({ fadeIn }) => {
  return (
    <>
      {controls.map((item) => {
        return (
          <Fade in={fadeIn} key={item.name}>
            <IconButton aria-label={item.name}>{item.icon}</IconButton>
          </Fade>
        );
      })}
    </>
  );
};

export default ToDoSecondaryControls;
