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
import { generateDateButtonLabel } from "../../../utils/dateTimeUtil";
import useAddTask from "./../../../hooks/useAddTask";
import AddTaskButton from "./AddTaskButton";

let newTask = {};
const AddTask = () => {
  const {
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
  } = useAddTask();

  const addTaskModalOpen = useSelector(
    (state) => state.layout.addTaskModalOpen,
  );

  const dispatch = useDispatch();

  const addNewTask = (e) => {
    e.preventDefault();
    newTask = { title, description, dueDate, priority, project };
    console.log(newTask);
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
          <form onSubmit={addNewTask}>
            <TextField
              autoFocus
              margin="dense"
              id="task-name"
              label="Task Name"
              type="text"
              placeholder="task"
              fullWidth
              value={title}
              onChange={changeTitle}
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
              value={description}
              onChange={changeDescription}
              size="small"
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <AddTaskButton
                  title={!!dueDate ? generateDateButtonLabel(dueDate) : "Today"}
                  Icon={OutlinedFlagOutlinedIcon}
                  openMenuFn={openSelectDateMenu}
                />
                <AddTaskButton
                  title={!!project ? "selected" : "Inbox"}
                  Icon={OutlinedFlagOutlinedIcon}
                  // openMenuFn={openSelectDateMenu}
                />
                {/* <FormControl size="small" fullWidth>
                  <Select
                    id="project-select"
                    label="Project"
                    value={project}
                    onChange={selectProject}
                  >
                    <MenuItem value="inbox">Inbox</MenuItem>
                    <MenuItem value="chores">Chores</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl> */}
                {/* </Stack> */}
                {/* <Stack direction="row"> */}
                <AddTaskButton title="label" Icon={LabelOutlinedIcon} />
                <AddTaskButton
                  title="priority"
                  Icon={OutlinedFlagOutlinedIcon}
                  openMenuFn={openPriorityMenu}
                />
                <AddTaskButton title="reminder" Icon={AddAlarmIcon} />
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
            onClick={addNewTask}
            disabled={title.trim().length > 0 ? false : true}
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
      <PriorityMenu
        anchorEl={priorityAnchor}
        open={priorityMenuOpen}
        closePriorityMenu={closePriorityMenu}
        selectPriority={selectPriority}
      />
    </>
  );
};

export default AddTask;
