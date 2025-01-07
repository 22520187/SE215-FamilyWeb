import React from "react";   
import "../styles/components/MemberItem.css"
function MemberItem({member, onDelete}) 
{ 
    let imgURL="profile"+member.picId+".png"
    return (
        <div className="member_item_card">
            <img className="member_item_avt" src={imgURL}/>
            <div className="member_item_name">{member.name}</div>
            <span className="delete_item" onClick={onDelete}>&times;</span>
        </div>
    )
} 
export default MemberItem;