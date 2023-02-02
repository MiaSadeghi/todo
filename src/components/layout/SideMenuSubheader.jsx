import { ListItemText, ListSubheader } from "@mui/material";

const SideMenuSubheader = ({ title, children }) => {
  return (
    <ListSubheader
      component="div"
      id={title.toLowerCase()}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "transparent",
      }}
    >
      <ListItemText
        secondary={title}
        sx={{ ".MuiTypography-root": { fontWeight: 600 } }}
      />
      {children}
    </ListSubheader>
  );
};

export default SideMenuSubheader;
