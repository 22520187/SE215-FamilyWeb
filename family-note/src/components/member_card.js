import React from "react";  
import "../styles/components/MemberCard.css" 
function MemberCard({member, onAdd}) {  
    
    return ( 
        
        <div className="member_card" onClick={onAdd}>   
        <img src={"profile"+member.picId+".png"} className="member_card_image"/>
        <div className="member_card_name">{member.name}</div>

        </div>
    )

} 
export default MemberCard