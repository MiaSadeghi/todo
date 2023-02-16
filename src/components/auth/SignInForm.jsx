import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { hideSignInModal } from "../../redux/layoutSlice";

const SignInForm = () => {
  const signInModalOpen = useSelector((state) => state.layout.signInModalOpen);
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const signIn = () => {};
  const signUp = () => {};

  return (
    <Dialog
      open={signInModalOpen}
      onClose={() => {
        dispatch(hideSignInModal());
      }}
    >
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            dispatch(hideSignInModal());
          }}
        >
          Cancel
        </Button>
        <Button onClick={signIn}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
};
export default SignInForm;
