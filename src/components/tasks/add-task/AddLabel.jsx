import { TextField, Autocomplete, createFilterOptions } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLabel } from "../../../redux/todoSlice";

const filter = createFilterOptions();

const AddLabel = () => {
  const [value, setValue] = useState(null);
  const labels = useSelector((state) => state.todo.labels);
  const dispatch = useDispatch();

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue(newValue);
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          dispatch(addLabel(newValue.inputValue));
        } else {
          dispatch(addLabel(newValue.inputValue));
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option);
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="labels"
      options={labels}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => <TextField {...params} label="Labels" />}
    />
  );
};

export default AddLabel;
