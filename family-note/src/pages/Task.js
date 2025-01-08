import React, { useState } from "react";
import FloatingButton from "../components/task_floating_button";
import TaskItem from "../components/task_item";
import ListTask from "../components/list_task";


import "../styles/pages/TaskPage.css"
import MemberItem from "../components/member_item";
import MemberCard from "../components/member_card";

const Task = ({isAdmin}) => {   
  
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
  function onEdit() 
  {
    document.getElementById("popup").style.display="flex"; 
    document.getElementById("h2_header").innerHTML="Modify task";
    document.getElementById("taskName").defaultValue="Buy fruit";
    document.getElementById("description").defaultValue="Buy strongberry, banana";
    document.getElementById("endDate").defaultValue="2023-12-12";   
    document.getElementById("createTaskBtn").innerHTML="Update";

  }
  const exampleTaskTodo ={
    buttonText:"To Do",
    numberTask:5,
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
              document.getElementById("popup").style.display="flex"; 
              document.getElementById("h2_header").innerHTML="Create New Task";
              document.getElementById("taskName").defaultValue="";
              document.getElementById("description").defaultValue="";
              document.getElementById("endDate").defaultValue="";   
              document.getElementById("createTaskBtn").innerHTML="Create";
              document.getElementById("popup").style.display="none";
            }
          } class="close">&times;</span> 
          <h2 id="h2_header">Create New Task</h2> 
          <form id="taskForm"  onSubmit={
            (e)=>{
              e.preventDefault();
              if(document.getElementById("h2_header").innerHTML=="Create New Task") 
              {
                alert("Create success");
              } 
              else {
                alert("Update success");
              }
            }
          }> 
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
      <ListTask exampleTask={exampleTaskTodo} isEnable={true} onEdit={onEdit} isAdmin={isAdmin} ></ListTask> 
      <ListTask exampleTask={exampleTaskComplete} isEnable={false} onEdit={()=>{}  } isAdmin={isAdmin}></ListTask>  
      <ListTask exampleTask={exampleTaskMissing} isEnable={false} onEdit={()=>{} } isAdmin={isAdmin} ></ListTask>
      
      </div>
      </div>

      
    </div>
  );
};

export default Task;
