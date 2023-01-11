import { Checkbox, FormControlLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleCheck } from "../../redux/todoSlice";

const ToDo = (props) => {
  const { text } = props;
  const dispatch = useDispatch();
  const handleCheckbox = () => {
    dispatch(toggleCheck());
    console.log(`${text} was modified`);
  };

  return (
    <div className="task__item">
      <FormControlLabel
        control={<Checkbox onClick={handleCheckbox} />}
        label={text}
      />{" "}
    </div>
  );
};

export default ToDo;
