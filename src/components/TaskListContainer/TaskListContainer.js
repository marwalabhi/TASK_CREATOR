import "../TaskListContainer/TaskListContainer.css";
import Task from "../Task/Task";

const TaskListContainer = () => {
  return (
    <div className="task-list-container">
      <div className="heading-my-tsk">My Tasks</div>
      <Task />
    </div>
  );
};

export default TaskListContainer;
