import React from "react";
import ReactDOM from "react-dom/client";
import TaskListContainer from "./components/TaskListContainer/TaskListContainer";
import TaskForm from "./components/TaskForm/TaskForm";

const AppLayout = () => {
  return (
    <div className="appRoot">
      <header className="app-title">Task Creator Web-App</header>
      <div className="task-header">
        <div className="label-things-to-do">Things to do</div>
        <div className="task-info-btn-container">
          <div className="task-comp-info">
            <div className="task-completed">Tasks Completed</div>
            <div className="no-of-task">0/2</div>
          </div>
          <div className="create-task-btn-container">
            <button className="create-task-btn">Create a Task</button>
          </div>
        </div>
      </div>
      <TaskListContainer />
      <TaskForm/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
