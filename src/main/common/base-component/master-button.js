import React from "react";

function MasterButton(props) {
    return (
        <button 
            onClick={props.onClick} 
            className={props.className} 
            style={props.style} 
            disabled={props.disable}
            type={props.type}
            >
            <i 
                className={`${props.icon} 
                ${props.iconClass}`}
                >
            </i>
            {props?.label}
        </button>
    );
}

export default MasterButton;
