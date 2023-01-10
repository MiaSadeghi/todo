import { Backdrop } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { hideAddTaskModal } from "../../redux/layoutSlice";

const Modal = (props) => {
  const modalOpen = useSelector((state) => state.layout.addTaskModalOpen);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(hideAddTaskModal());
  };

  return (
    <>
      <Backdrop open={!!modalOpen} onClick={closeModal}>
        <div className="modal_container">
          <button>
            <i className="fa-regular fa-circle-xmark" />
          </button>
          <div className="modal_content">{props.children}</div>
        </div>
      </Backdrop>
    </>
  );
};

export default Modal;
