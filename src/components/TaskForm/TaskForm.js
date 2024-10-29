import "../TaskForm/TaskForm.css";

handleSubmit = () => {

};

const TaskForm = () => {
    return(
        <div className="task-create-form">
            <div className="tsk-title-fill-c">
                <div className="tskform-head">Creating a Task</div>
                <form onSubmit={handleSubmit}>
                    <label>Title<input type="text" placeholder="Enter task"></input></label>
                    
                    
                </form>
            </div>
            <div className="tsk-info-fill-c"></div>
        </div>
    );
};


export default TaskForm;