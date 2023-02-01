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
  ListSubheader,
  Collapse,
  Box,
} from "@mui/material";
import Inbox from "@mui/icons-material/Inbox";
import Today from "@mui/icons-material/Today";
import Upcoming from "@mui/icons-material/CalendarMonth";
import Filter from "@mui/icons-material/Tune";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Add from "@mui/icons-material/Add";
import Circle from "@mui/icons-material/Circle";
import Person from "@mui/icons-material/Person";

const drawerWidth = 240;

const SideMenu = () => {
  const [projectNames, setProjectNames] = useState([]);
  const [favoritesIsOpen, setFavoritesIsOpen] = useState(true);
  const [projectsIsOpen, setProjectsIsOpen] = useState(true);
  const sideMenuIsOpen = useSelector((state) => state.layout.sideMenuOpen);

  const mainFilters = [
    { title: "Today", icon: <Today color="success" /> },
    { title: "Upcoming", icon: <Upcoming color="primary" /> },
    { title: "Inbox", icon: <Inbox color="secondary" /> },
    { title: "Filters & Labels", icon: <Filter color="warning" /> },
  ];

  const toggleFavorites = () => {
    setFavoritesIsOpen((prevState) => !prevState);
  };
  const toggleProjects = () => {
    setProjectsIsOpen((prevState) => !prevState);
  };

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
      <List sx={{ mb: 3 }} dense>
        {mainFilters.map((item) => {
          return (
            <ListItem key={item.title} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <List
        dense
        subheader={
          <ListSubheader
            component="div"
            id="favorites"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <ListItemText secondary="Favorites" />
            <ListItemIcon onClick={toggleFavorites}>
              {favoritesIsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </ListSubheader>
        }
        sx={{ mb: 3 }}
      >
        <Collapse in={favoritesIsOpen} timeout="auto" unmountOnExit>
          {projectNames.map((project) => (
            <ListItem key={project.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Circle fontSize="8px " />
                </ListItemIcon>
                <ListItemText primary={project.attributes.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
      </List>

      <List
        dense
        subheader={
          <ListSubheader
            component="div"
            id="projects"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <ListItemText secondary="Projects" />

            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemIcon onClick={toggleProjects}>
              {projectsIsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </ListSubheader>
        }
      >
        <Collapse in={projectsIsOpen} timeout="auto" unmountOnExit>
          {projectNames.map((project) => (
            <ListItem key={project.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Circle fontSize="8px " />
                </ListItemIcon>
                <ListItemText primary={project.attributes.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
      </List>
    </Drawer>
  );
};

export default SideMenu;
