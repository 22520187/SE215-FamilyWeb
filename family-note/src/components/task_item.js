import React from "react";   
import "../styles/components/TaskItem.css";
function TaskItem({task}) 
{
    return (
        <div className="task_container">
            <div class="task-title">{task.name}</div>
             <div class="task-desc">{task.detail}</div> 
             <div class="line"></div>
             <div class="task-details"> <div class="assigned"> 
                <img src="profile1.png" alt="Profile 1/"/> 
                <img src="profile2.png" alt="Profile 2"/> </div> 
                <div>
                    <div className="end-date-text">End date</div>
                <div class="end-date">{task.time}
                    </div> 
                    </div>
                </div>
                
        </div>
    )
} 
export default TaskItem;