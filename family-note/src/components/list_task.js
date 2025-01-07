import React from "react";   
import FloatingButton from "./task_floating_button";
import TaskItem from "./task_item";  
import "../styles/components/ListTask.css";
import AddNewTaskButton from "./add_new_task_button";
function ListTask({exampleTask}) 
{
     
    return (
        <div>
            <FloatingButton buttonText={exampleTask.buttonText} numberTask={exampleTask.numberTask}></FloatingButton>   
             
            <AddNewTaskButton param={exampleTask.buttonText}></AddNewTaskButton>  
             <div className="list_scroll_task">
                {exampleTask.listTasks.map((item)=>{
                    return (
                        <TaskItem task={item}></TaskItem>
                    )
                })}
             </div>
        </div>
    )
} 
export default ListTask;