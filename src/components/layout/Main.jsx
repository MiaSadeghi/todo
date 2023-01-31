import { Stack } from "@mui/material";
import ToDoList from "../tasks/ToDoList";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";

const Main = () => {
  const sideMenuIsOpen = useSelector((state) => state.layout.sideMenuOpen);
  const theme = useTheme();
  const styles = { p: 2 };
  styles.transition = theme.transitions.create("padding", {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  });
  if (sideMenuIsOpen) {
    styles.pl = "240px";
  }

  return (
    <Stack justifyContent="center" alignItems="center" sx={styles}>
      <ToDoList />
    </Stack>
  );
};

export default Main;
