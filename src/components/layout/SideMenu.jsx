import Parse from "parse";
import { useState, useEffect } from "react";
import Project from "../../classes/Project";
import { Drawer } from "@mui/material";

const SideMenu = () => {
  const [projectNames, setProjectNames] = useState([]);

  useEffect(() => {
    const query = new Parse.Query(Project);
    query.find().then((result) => {
      setProjectNames(result);
      console.log(result);
    });
  }, []);

  const mappedProjects = projectNames.map((project) => (
    <li key={project.id}>{project.attributes.name}</li>
  ));

  return (
    <Drawer anchor="left" variant="persistent" className="sidemenu">
      <div>
        <div className="sidemenu-title">Projects</div>
        <ul>
          <li>Errands</li>
          <li>Personal</li>
          <li>Shopping List</li>
          {mappedProjects}
        </ul>
      </div>
    </Drawer>
  );
};

export default SideMenu;
