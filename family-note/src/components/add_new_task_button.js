import React, { useRef } from "react";
import { Day, WorkWeek, Week, ScheduleComponent, Inject } from "@syncfusion/ej2-react-schedule";
import { Button ,Typography , Select , theme} from "antd"; 
const { Option } = Select;
const { Title } = Typography;
function AddNewTaskButton({param, isAdmin}) 
{  
    const ref= useRef(null);  
    function onAddNewTask() 
    {
        document.getElementById("popup").style.display="flex"; 
        
        
    } 
    if(isAdmin==false) {
        return <div></div>
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
    else  {
        return <div></div>
    }
} 
export default AddNewTaskButton;