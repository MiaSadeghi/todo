import { Checkbox, FormControlLabel } from "@mui/material";

const ToDo = (props) => {
  const { text } = props;

  const handleMarkAsDone = () => {};

  return (
    <div className="task__item">
      <FormControlLabel control={<Checkbox />} label={text} />{" "}
    </div>
  );
};

export default ToDo;
