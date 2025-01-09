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
        
        return <Button className=""  type="primary" style={{width:'100%'}}
        onClick={(e)=>{
            e.preventDefault();
            onAddNewTask();
        }}   
        >Add new task</Button>
    } 
    else  {
        return <div></div>
    }
} 
export default AddNewTaskButton;