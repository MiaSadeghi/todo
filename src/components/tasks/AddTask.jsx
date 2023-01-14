import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideAddTaskModal } from "../../redux/layoutSlice";

import { Dialog, TextField, DialogContent, Button } from "@mui/material";

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
            fullWidth
            value={userInput}
            onChange={handleInputChange}
            variant="standard"
            color="info"
          />
          <Button variant="contained" type="submit">
            Add Task
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;
