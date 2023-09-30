import React from "react";

const Buttons = (props) => {
    return (
        <div className="bg-gray-800 px-2 py-1 rounded-lg">
            <button>{props.contents}</button>
            <p>{props.type}</p>
        </div>
    )
}

export default Buttons;

