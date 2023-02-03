import { useState } from "react";

const useAddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [project, setProject] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [priorityAnchor, setPriorityAnchor] = useState(null);
  const [selectDateAnchor, setSelectDateAnchor] = useState(null);

  const selectDateMenuOpen = Boolean(selectDateAnchor);
  const priorityMenuOpen = Boolean(priorityAnchor);

  //menu toggle functions.
  const openPriorityMenu = (e) => {
    setPriorityAnchor(e.currentTarget);
  };

  const openSelectDateMenu = (e) => {
    setSelectDateAnchor(e.currentTarget);
  };
  const closeSelectDateMenu = () => {
    setSelectDateAnchor(null);
  };
  const closePriorityMenu = () => {
    setPriorityAnchor(null);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const selectProject = (e) => {
    setProject(e.target.value);
    console.log(e.target.value);
  };

  const selectDate = (date) => {
    closeSelectDateMenu();
    setDueDate(date);
  };

  const selectPriority = (priority) => {
    setPriority(priority);
    closePriorityMenu();
  };

  return {
    selectDateMenuOpen,
    priorityMenuOpen,
    title,
    description,
    dueDate,
    priority,
    project,
    priorityAnchor,
    selectDateAnchor,
    selectPriority,
    selectDate,
    selectProject,
    changeDescription,
    changeTitle,
    openSelectDateMenu,
    openPriorityMenu,
    closeSelectDateMenu,
    closePriorityMenu,
  };
};

export default useAddTask;
