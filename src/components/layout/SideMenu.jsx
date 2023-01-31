import { useSelector } from "react-redux";
import Parse from "parse";
import { useState, useEffect } from "react";
import Project from "../../classes/Project";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;
const SideMenu = () => {
  const [projectNames, setProjectNames] = useState([]);

  const sideMenuIsOpen = useSelector((state) => state.layout.sideMenuOpen);

  useEffect(() => {
    const query = new Parse.Query(Project);
    query.find().then((result) => {
      setProjectNames(result);
      console.log(result);
    });
  }, []);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={sideMenuIsOpen}
    >
      <Toolbar />

      <List>
        {projectNames.map((project) => (
          <ListItem key={project.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={project.attributes.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>

    // <Drawer anchor="left" variant="persistent" className="sidemenu">
    //   <div>
    //     <div className="sidemenu-title">Projects</div>
    //     <ul>
    //       <li>Errands</li>
    //       <li>Personal</li>
    //       <li>Shopping List</li>
    //       {mappedProjects}
    //     </ul>
    //   </div>
    // </Drawer>
  );
};

export default SideMenu;
