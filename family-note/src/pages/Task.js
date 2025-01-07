import React, { useState } from "react";
import FloatingButton from "../components/task_floating_button";
import TaskItem from "../components/task_item";
import ListTask from "../components/list_task";
import CompletTaskItem from "../components/task_complete";

import "../styles/pages/TaskPage.css"
import MemberItem from "../components/member_item";
import MemberCard from "../components/member_card";

const Task = () => {  
  const listMember = [
    {
      picId:1,
      name:"Sophia"
    }, 
    {
      picId:2,
      name:"Alan"
    }
  ]  
  const [listSelectMember, setListSelectMember] = useState([]);
  function onAddMember(item) { 
    setListSelectMember([...listSelectMember,item]);
    document.getElementById("member_popup").style.display="none";

  } 
  function onDeleteMember(i) {
    const listTemp = listSelectMember.filter((item, index)=>{
      if(index==i) 
      {
        return false;
      }  
      return true;

    });
    setListSelectMember(listTemp);
  }
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
      <div id="popup" class="popup">
         <div class="popup-content"> 
          <span id="close"  onClick={
            (e)=>{
              e.preventDefault();
              setListSelectMember([]);
              document.getElementById("popup").style.display="none";
            }
          } class="close">&times;</span> 
          <h2>Create New Task</h2> 
          <form id="taskForm"> 
            <div className="select-member">
            <div>For</div> 
            <div className="list_member">
              {
                listSelectMember.map((item, index)=>{
                  return <MemberItem member={item} onDelete={()=>{
                    onDeleteMember(index);
                  }}></MemberItem>
                })
              }
              </div>  
            <img onClick={
              (e)=>{
                e.preventDefault();
                document.getElementById("member_popup").style.display="flex";
              }
            } src="add_member.jpg" className="add_member_img"/>
            
            </div>
            <input type="text" id="taskName" name="taskName" placeholder="Enter task name" required/>
             <label for="description">Description:</label> 
             <textarea id="description" name="description" placeholder="Enter task description" required/> 
             <label for="endDate">End Date:</label> 
             <input  type="date" id="endDate" name="endDate" required/> 
             <button type="submit" id="createTaskBtn" className="submit-create-task">Create Task</button> 
             </form> 
          </div> 
      </div>

      <div id="member_popup" className="popup">
        <div class="popup-content" id="member_popup_content">
        <span id="close_member"  onClick={
            (e)=>{
              e.preventDefault();
              document.getElementById("member_popup").style.display="none";
            }
          } class="close">&times;</span>
          <h2>Members</h2>
          <div className="member_list">
            {
              listMember.map((item, index)=>{
                return <MemberCard member={item} onAdd ={
                  ()=>{
                    onAddMember(item);
                  }
                }></MemberCard>
              })
            }
          </div>
        </div>
      </div>
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
