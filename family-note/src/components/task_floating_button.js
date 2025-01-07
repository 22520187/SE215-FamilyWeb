import React from "react";
import "../styles/components/TaskStyle.css";  
function FloatingButton({buttonText, numberTask}) {
    return (
        <div className="floating_button">  
        <div className="button_text">{buttonText}</div>
        <div className="number_task">{numberTask}</div>

        </div>
    )
} 
export default FloatingButton;