import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideAddTaskModal } from "../../../redux/layoutSlice";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";

import {
  Dialog,
  TextField,
  DialogContent,
  Button,
  Stack,
  Select,
  MenuItem,
  DialogActions,
  FormControl,
} from "@mui/material";
import SelectDateMenu from "./SelectDateMenu";
import PriorityMenu from "./PriorityMenu";

const AddTask = () => {
  const [taskInput, setTaskInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedDueDate, setSelectedDueDate] = useState("");
  const [priorityAnchor, setPriorityAnchor] = useState(null);
  const [selectDateAnchor, setSelectDateAnchor] = useState(null);

  const selectDateMenuOpen = Boolean(selectDateAnchor);

  const priorityMenuOpen = Boolean(priorityAnchor);

  const openPriorityMenu = (e) => {
    setPriorityAnchor(e.currentTarget);
  };

  const openSelectDateMenu = (e) => {
    setSelectDateAnchor(e.currentTarget);
  };
  const addTaskModalOpen = useSelector(
    (state) => state.layout.addTaskModalOpen,
  );

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescriptionInput(e.target.value);
  };

  const handleSelectProject = (e) => {
    setSelectedProject(e.target.value);
    console.log(e.target.value);
  };

  const selectDueDate = (date) => {
    if (!date.isValid) {
      setSelectedDueDate(null);
      return;
    }
    setSelectedDueDate(date.format("YYYY-MM-DD"));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTaskInput("");
  };

  return (
    <>
      <Dialog
        open={addTaskModalOpen}
        onClose={() => {
          dispatch(hideAddTaskModal());
        }}
        maxWidth="sm"
        fullWidth
        sx={{ ".MuiPaper-root": { position: "absolute", top: 80 } }}
      >
        <DialogContent>
          <form onSubmit={handleFormSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="task-name"
              label="Task Name"
              type="text"
              placeholder="task"
              fullWidth
              value={taskInput}
              onChange={handleInputChange}
              variant="standard"
              color="info"
            />
            <TextField
              id="task-description"
              label="Description"
              type="text"
              fullWidth
              placeholder="description"
              variant="standard"
              value={descriptionInput}
              onChange={handleDescriptionChange}
              size="small"
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Button
                  onClick={openSelectDateMenu}
                  color="info"
                  variant="outlined"
                >
                  Dute Date
                </Button>
                <FormControl size="small" fullWidth>
                  <Select
                    id="project-select"
                    label="Project"
                    value={selectedProject}
                    onChange={handleSelectProject}
                  >
                    <MenuItem value="inbox">Inbox</MenuItem>
                    <MenuItem value="chores">Chores</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack direction="row">
                <Button variant="outlined" color="info">
                  <LabelOutlinedIcon />
                  label
                </Button>
                <Button
                  variant="outlined"
                  color="info"
                  onClick={openPriorityMenu}
                >
                  <OutlinedFlagOutlinedIcon />
                  priority
                </Button>
                <Button variant="outlined" color="info">
                  <AddAlarmIcon />
                  reminder
                </Button>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-end"
            ></Stack>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            size="small"
            color="info"
            // variant="outlined"
            onClick={() => {
              dispatch(hideAddTaskModal());
            }}
          >
            Cancel
          </Button>
          <Button
            size="small"
            variant="contained"
            type="submit"
            disabled={taskInput.trim().length > 0 ? false : true}
          >
            Add Task
          </Button>
        </DialogActions>
      </Dialog>
      <SelectDateMenu anchorEl={selectDateAnchor} open={selectDateMenuOpen} />
      <PriorityMenu anchorEl={priorityAnchor} open={priorityMenuOpen} />
    </>
  );
};

export default AddTask;
