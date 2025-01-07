import React from "react";
import FloatingButton from "../components/task_floating_button";
import TaskItem from "../components/task_item";
import ListTask from "../components/list_task";
import CompletTaskItem from "../components/task_complete";

import "../styles/pages/TaskPage.css"

const Task = () => { 
  const exampleTaskTodo ={
    buttonText:"To Do",
    numberTask:3,
    listTasks:[
        {
            name:"Buy fruit",
            detail:"Buy orange, strong berry, bannana",
            time:"25 May-16:00"
        }, 
        {
            name:"Buy fruit",
            detail:"Buy orange, strong berry, bannana",
            time:"25 May-16:00"
        }, 
        {
            name:"Buy fruit",
            detail:"Buy orange, strong berry, bannana",
            time:"25 May-16:00"
        }
    ]
};

const exampleTaskComplete = {  
  buttonText:"Completed",
    numberTask:1,
    listTasks:[
        {
            name:"Buy fruit",
            detail:"Buy orange, strong berry, bannana",
            time:"25 May-16:00"
        }
    ]

};
const exampleTaskMissing = { 
  buttonText:"Missing",
    numberTask:3,
    listTasks:[
        {
            name:"Buy fruit",
            detail:"Buy orange, strong berry, bannana",
            time:"25 May-16:00"
        }, 
        {
            name:"Buy fruit",
            detail:"Buy orange, strong berry, bannana",
            time:"25 May-16:00"
        }, 
        {
            name:"Buy fruit",
            detail:"Buy orange, strong berry, bannana",
            time:"25 May-16:00"
        }
    ]

}


  return (
    <div>
      <h1>Task Page</h1>

      <div className="tas-page-root">
      <div className="list-task-page-content">
      <ListTask exampleTask={exampleTaskTodo}></ListTask> 
      <ListTask exampleTask={exampleTaskComplete}></ListTask>  
      <ListTask exampleTask={exampleTaskMissing}></ListTask>
      
      </div>
      </div>

      
    </div>
  );
};

export default Task;
