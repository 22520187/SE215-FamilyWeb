import React from "react";
import "../styles/components/TaskStyle.css";  
function FloatingButton({buttonText, numberTask, colorCode}) {
    return (
        <div className="floating_button" style ={{
            border:"1px solid "+colorCode
        }} >  
        <div className="button_text" style = {
            {
                color:colorCode
            }
        }>{buttonText}</div>
        <div className="number_task">{numberTask}</div>

        </div>
    )
} 
export default FloatingButton;