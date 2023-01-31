import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideAddTaskModal } from "../../../redux/layoutSlice";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import moment from "moment/moment";
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
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskProject, setTaskProject] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [priorityAnchor, setPriorityAnchor] = useState(null);
  const [selectDateAnchor, setSelectDateAnchor] = useState(null);
  const [dateButtonTxt, setDateButtonTxt] = useState("Today");

  const selectDateMenuOpen = Boolean(selectDateAnchor);
  const priorityMenuOpen = Boolean(priorityAnchor);

  const openPriorityMenu = (e) => {
    setPriorityAnchor(e.currentTarget);
  };

  const openSelectDateMenu = (e) => {
    setSelectDateAnchor(e.currentTarget);
  };

  const closeSelectDateMenu = () => {
    setSelectDateAnchor(null);
  };

  const selectDate = (date) => {
    setSelectDateAnchor(null);
    setTaskDueDate(date);
    setDateButtonTxt(moment(date).format("dddd"));
  };

  const addTaskModalOpen = useSelector(
    (state) => state.layout.addTaskModalOpen,
  );

  const dispatch = useDispatch();

  const changeTaskTitle = (e) => {
    setTaskTitle(e.target.value);
  };

  const changeTaskDescription = (e) => {
    setTaskDescription(e.target.value);
  };

  const changeTaskProject = (e) => {
    setTaskProject(e.target.value);
    console.log(e.target.value);
  };

  const selectDueDate = (date) => {
    if (!date.isValid) {
      setTaskDueDate(null);
      return;
    }
    setTaskDueDate(date.format("YYYY-MM-DD"));
  };
  const addTask = (e) => {
    e.preventDefault();
    setTaskTitle("");
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
          <form onSubmit={addTask}>
            <TextField
              autoFocus
              margin="dense"
              id="task-name"
              label="Task Name"
              type="text"
              placeholder="task"
              fullWidth
              value={taskTitle}
              onChange={changeTaskTitle}
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
              value={taskDescription}
              onChange={changeTaskDescription}
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
                  {dateButtonTxt}
                </Button>
                <FormControl size="small" fullWidth>
                  <Select
                    id="project-select"
                    label="Project"
                    value={taskProject}
                    onChange={changeTaskProject}
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
            disabled={taskTitle.trim().length > 0 ? false : true}
          >
            Add Task
          </Button>
        </DialogActions>
      </Dialog>
      <SelectDateMenu
        anchorEl={selectDateAnchor}
        open={selectDateMenuOpen}
        selectDate={selectDate}
        closeSelectDateMenu={closeSelectDateMenu}
      />
      <PriorityMenu anchorEl={priorityAnchor} open={priorityMenuOpen} />
    </>
  );
};

export default AddTask;
