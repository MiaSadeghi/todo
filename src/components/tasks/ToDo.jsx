const ToDo = (props) => {
  const { text } = props;

  const handleMarkAsDone = () => {};

  return (
    <div className="task__item">
      <input type="checkbox" onClick={handleMarkAsDone} />
      <p>{text}</p>
    </div>
  );
};

export default ToDo;
