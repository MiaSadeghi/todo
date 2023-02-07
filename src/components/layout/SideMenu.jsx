import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Drawer, List, Toolbar, Collapse } from "@mui/material";
import Circle from "@mui/icons-material/Circle";
// import Person from "@mui/icons-material/Person";
import SideMenuItem from "./SideMenuItem";
import { mainProjectFilters } from "../../utils/mainProjectFilters";
import { SideMenuChevron, SideMenuAdd } from "./SideMenuControl";
import SideMenuSubheader from "./SideMenuSubheader";
import { toggleAddProjectModal } from "../../redux/layoutSlice";

const SideMenu = () => {
  const projects = useSelector((state) => state.todo.projects);
  const [favoritesIsOpen, setFavoritesIsOpen] = useState(true);
  const [projectsIsOpen, setProjectsIsOpen] = useState(true);
  const [sideMenuHover, setSideMenuHover] = useState(false);
  const sideMenuIsOpen = useSelector((state) => state.layout.sideMenuOpen);

  const dispatch = useDispatch();
  const toggleFavorites = () => {
    setFavoritesIsOpen((prevState) => !prevState);
  };
  const toggleProjects = () => {
    setProjectsIsOpen((prevState) => !prevState);
  };

  const openAddProject = () => {
    dispatch(toggleAddProjectModal());
    console.log("I was clicked!");
  };

  return (
    <Drawer
      sx={{
        width: "220px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          backgroundColor: "#fafafa",
          width: "220px",
          boxSizing: "border-box",
          border: "none",
        },
      }}
      variant="persistent"
      anchor="left"
      open={sideMenuIsOpen}
      PaperProps={{
        onMouseOver: () => {
          setSideMenuHover(true);
        },
        onMouseLeave: () => {
          setSideMenuHover(false);
        },
      }}
    >
      <Toolbar />
      <List sx={{ mt: 3 }} dense>
        {mainProjectFilters.map((item) => {
          return (
            <SideMenuItem
              title={item.title}
              icon={item.icon}
              key={item.title}
            />
          );
        })}
      </List>

      <List
        dense
        subheader={
          <SideMenuSubheader title="Favorites">
            <SideMenuChevron
              fadeIn={sideMenuHover}
              toggleFn={toggleFavorites}
              isToggled={favoritesIsOpen}
            />
          </SideMenuSubheader>
        }
        sx={{ mt: 3 }}
      >
        <Collapse in={favoritesIsOpen} timeout="auto" unmountOnExit>
          {projects
            .filter((p) => p.isFavorite === true)
            .map((project) => (
              <SideMenuItem
                title={project.title}
                icon={<Circle fontSize="8px " sx={{ color: project.color }} />}
                key={project.title}
              />
            ))}
        </Collapse>
      </List>

      <List
        sx={{ mt: 3 }}
        dense
        subheader={
          <SideMenuSubheader title="Projects">
            <SideMenuAdd fadeIn={sideMenuHover} onClick={openAddProject} />
            <SideMenuChevron
              fadeIn={sideMenuHover}
              toggleFn={toggleProjects}
              isToggled={projectsIsOpen}
            />
          </SideMenuSubheader>
        }
      >
        <Collapse in={projectsIsOpen} timeout="auto" unmountOnExit>
          {projects.map((project) => (
            <SideMenuItem
              title={project.title}
              icon={<Circle fontSize="8px " sx={{ color: project.color }} />}
              key={project.title}
            />
          ))}
        </Collapse>
      </List>
    </Drawer>
  );
};

export default SideMenu;
