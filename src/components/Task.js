const Task = ({ task, index, handleComplete, handleRemove }) => {
  const handleCompleteClick = () => handleComplete(index);

  const handleRemoveClick = () => handleRemove(index);

  return (
    <div
      className="task"
      style={{
        textDecoration: task.completed ? "line-through" : "",
        opacity: task.completed ? "0.5" : "",
      }}
    >
      {task.text}
      <button 
      style={{ backgroundColor: "red" }} 
      onClick={handleRemoveClick}
      >
        &#10540;
      </button>
      <button
        style={{ backgroundColor: "green" }}
        onClick={handleCompleteClick}
      >
        &#10003;
      </button>
    </div>
  );
};

export default Task;
