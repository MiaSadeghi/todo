import { useState } from "react";
import Modal from "../modal/Modal";

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
        <input value={userInput} onChange={handleInputChange} type="text" />
        <button type="submit">Add Task</button>
      </form>
    </Modal>
  );
};

export default AddTask;
