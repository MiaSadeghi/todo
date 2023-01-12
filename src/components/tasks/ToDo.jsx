import { Checkbox, FormControlLabel, Skeleton } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleCheck } from "../../redux/todoSlice";

const ToDo = (props) => {
  const { text, decorative } = props;
  const dispatch = useDispatch();
  const handleCheckbox = () => {
    dispatch(toggleCheck());
    console.log(`${text} was modified`);
  };

  return (
    <div className="task__item">
      <FormControlLabel
        control={<Checkbox onClick={handleCheckbox} disabled={decorative} />}
        label={
          decorative ? (
            <Skeleton sx={{ width: "700px" }} variant="text" />
          ) : (
            text
          )
        }
      />{" "}
    </div>
  );
};

export default ToDo;
