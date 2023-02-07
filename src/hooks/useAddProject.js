import { useState } from "react";

const useAddProject = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("Magenta");

  //change handler functions
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
  };

  const selectColor = (e) => {
    setColor(e.target.value);
  };

  return { title, isFavorite, color, changeTitle, toggleFavorite, selectColor };
};

export default useAddProject;
