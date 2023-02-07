import { useSelector, useDispatch } from "react-redux";
import { toggleAddProjectModal } from "../../../redux/layoutSlice";
import colors from "../../../utils/projectColors";
import Circle from "@mui/icons-material/Circle";
import useAddProject from "./../../../hooks/useAddProject";
import {
  Dialog,
  TextField,
  DialogContent,
  Button,
  DialogActions,
  FormControl,
  FormControlLabel,
  Switch,
  FormGroup,
  Select,
  MenuItem,
} from "@mui/material";

let newProject = {};

const AddProject = () => {
  //initialize an instance of the useAddProject custom hook
  const { title, isFavorite, color, changeTitle, toggleFavorite, selectColor } =
    useAddProject();

  //redux selector and dispatch
  const dispatch = useDispatch();
  const addProjectModalOpen = useSelector(
    (state) => state.layout.addProjectModalOpen,
  );

  //submitHandler function
  const addNewProject = (e) => {
    e.preventDefault();
    newProject = { title, color, isFavorite };
    console.log(newProject);
    dispatch(toggleAddProjectModal());
  };

  return (
    <>
      <Dialog
        open={addProjectModalOpen}
        onClose={() => {
          dispatch(toggleAddProjectModal());
        }}
        maxWidth="sm"
        fullWidth
        sx={{ ".MuiPaper-root": { position: "absolute", top: 80 } }}
      >
        <DialogContent>
          <form onSubmit={addNewProject}>
            <TextField
              autoFocus
              margin="dense"
              id="project-name"
              label="Name"
              type="text"
              fullWidth
              value={title}
              onChange={changeTitle}
              variant="standard"
              color="info"
            />

            <FormControl size="small" fullWidth>
              <Select
                id="color-select"
                label="Color"
                value={color}
                onChange={selectColor}
              >
                {colors.map((color) => (
                  <MenuItem value={color.name} key={color.hex}>
                    <Circle fontSize="8px " sx={{ color: color.hex }} />
                    {color.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={isFavorite}
                    onChange={toggleFavorite}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Add to favorites"
              />
            </FormGroup>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            size="small"
            color="info"
            // variant="outlined"
            onClick={() => {
              dispatch(toggleAddProjectModal());
            }}
          >
            Cancel
          </Button>
          <Button
            size="small"
            variant="contained"
            type="submit"
            onClick={addNewProject}
            disabled={title.trim().length > 0 ? false : true}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddProject;
