import React from "react";   
import FloatingButton from "./task_floating_button";
import TaskItem from "./task_item";  
import "../styles/components/ListTask.css";
import AddNewTaskButton from "./add_new_task_button";
function ListTask({exampleTask, isEnable, onEdit, isAdmin, colorCode}) 
{
     
    return (
        <div>
            <FloatingButton buttonText={exampleTask.buttonText} numberTask={exampleTask.numberTask} colorCode={colorCode}></FloatingButton>   
             
            <AddNewTaskButton param={exampleTask.buttonText} isAdmin={isAdmin}></AddNewTaskButton>  
             <div className="list_scroll_task">
                {exampleTask.listTasks.map((item)=>{
                    return (
                        <TaskItem task={item} isEnable={isEnable} onEdit={onEdit} isAdmin={isAdmin} colorCode={colorCode} ></TaskItem>
                    )
                })}
             </div>
        </div>
    )
} 
export default ListTask;