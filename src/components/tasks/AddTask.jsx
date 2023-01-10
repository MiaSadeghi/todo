import { useState } from "react";
import Modal from "../modal/Modal";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const AddTask = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserInput("");
  };

  return (
    <Modal>
      <form onSubmit={handleFormSubmit}>
        <TextField
          id="standard-basic"
          label="Task Name"
          variant="standard"
          value={userInput}
          onChange={handleInputChange}
          type="text"
          required
        />
        <Button variant="contained" type="submit">
          Add Task
        </Button>
      </form>
    </Modal>
  );
};

export default AddTask;
