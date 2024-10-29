import "../Task/Task.css";

const Task = () => {
  return (
    <div className="task-single-item">
      <div className="task-title-cont">
        <div className="svg">svg</div>
        <div className="title-name-tsk">Task Title here</div>
      </div>
      <div className="tsk-oth-info-cont">
        <span className="due-date-info">Due Date</span>
        <span className="task-details-info">
          <button className="edit-task-btn">Task Details</button>
        </span>
        <span className="delete-task-on-click">Delete Task</span>
      </div>
    </div>
  );
};

export default Task;
