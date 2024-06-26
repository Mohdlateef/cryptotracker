import React from "react";
import "./style.css";
function Button({text,onClick,outlined}){
    return(
        <div className={outlined?"outlined_btn":"btn"} onClick={()=> onClick()}>{text}</div>
    )
}
export default Button;