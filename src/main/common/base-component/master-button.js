import React from "react";

function MasterButton(props) {
    function onClickHandler(e) {
        props.click(e);
    }
    return (
        <button 
            onClick={onClickHandler} 
            className={props.className} 
            style={{ cursor: 'pointer' }} 
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
