import Task from "./Task";

const TaskList = ({ tasks, handleComplete, handleRemove }) => {
  return (
    <div>
      {!tasks.length ? <p style={{ textAlign: 'center' }}>No Tasks to Show</p> : tasks.map((task, index) => (
        <Task
          task={task}
          key={task.id}
          index={index}
          handleComplete={handleComplete}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default TaskList;
