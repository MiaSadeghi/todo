import { useState } from "react";
import { set, ref, getDatabase } from "firebase/database";

const AddTask = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase();
    set(ref(db, "todos/" + new Date()), {
      text: userInput,
    });
    // axios.post(
    //   "https://todolist-76f05-default-rtdb.firebaseio.com/todos.json",
    //   { text: userInput },
    // );
    setUserInput("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input value={userInput} onChange={handleInputChange} type="text" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
