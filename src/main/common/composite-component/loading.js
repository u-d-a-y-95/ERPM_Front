import React from "react";
import one from "../../../assets/image/spinner.gif";


function Loading() {
    return (
        <div className="global-loading-css">
            <img width="80" height="80" src={one} alt="Loading" />
        </div>
    );
}

export default Loading;
