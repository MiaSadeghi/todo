import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideAddTaskModal } from "../../redux/layoutSlice";

import {
  Dialog,
  TextField,
  DialogContent,
  Button,
  Stack,
  Select,
  MenuItem,
} from "@mui/material";

const AddTask = () => {
  const [userInput, setUserInput] = useState("");
  const addTaskModalOpen = useSelector(
    (state) => state.layout.addTaskModalOpen,
  );
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserInput("");
  };

  return (
    <Dialog
      open={addTaskModalOpen}
      onClose={() => {
        dispatch(hideAddTaskModal());
      }}
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
            value={userInput}
            onChange={handleInputChange}
            variant="standard"
            color="info"
          />
          <Stack>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Project"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(hideAddTaskModal());
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              disabled={userInput.trim().length > 0 ? false : true}
            >
              Add Task
            </Button>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;
