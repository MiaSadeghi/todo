const Modal = (props) => {
  return (
    <>
      <div className="modal_backdrop" />
      <div className="modal_container">
        <button>
          <i className="fa-regular fa-circle-xmark" />
        </button>
        <div className="modal_content">{props.children}</div>
      </div>
    </>
  );
};

export default Modal;
