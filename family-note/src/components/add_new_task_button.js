import React from "react";   
function AddNewTaskButton({param}) 
{
    if(param=="To Do") 
    {
        return <button className="add_new_task_button">Add new task</button>
    } 
    else {
        return <div></div>
    }
} 
export default AddNewTaskButton;