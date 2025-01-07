import React from "react";  
import "../styles/components/TaskItemComplete.css";
function CompletTaskItem() 
{
    return (
        <div class="task-container-complete">
             <div class="task-title-complete">Buy fruit</div> 
             <div class="task-desc-complete">Buy mango, strong berry, banana</div> 
             <div class="task-details-complete"> <div class="assigned-complete"> 
                <img src="profile1.png" alt="Profile 1"/>
                 <img src="profile2.png" alt="Profile 2"/> </div> 
                 <div class="end-date-complete">25 May - 16:00</div> </div> </div>
    )
} 
export default CompletTaskItem;