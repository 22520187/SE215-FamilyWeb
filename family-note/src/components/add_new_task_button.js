import React from "react";   
function AddNewTaskButton({param}) 
{ 
    function onAddNewTask() 
    {
        document.getElementById("popup").style.display="flex";
        
    }
    if(param=="To Do") 
    { 
        
        return <button className="add_new_task_button"  
        onClick={(e)=>{
            e.preventDefault();
            onAddNewTask();
        }}   
        >Add new task</button>
    } 
    else {
        return <div></div>
    }
} 
export default AddNewTaskButton;