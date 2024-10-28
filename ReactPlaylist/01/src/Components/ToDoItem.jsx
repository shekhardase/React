import React from "react";

const TODOItem = (prop) => {
    return (
        <li className="ToDo-Item">
            <span>
                {prop.completed ? <></> : <input type="checkbox" />}

                <span className="Item-text" >{prop.text}</span>
            </span>
            <p>...</p>
        </li>

    )

}

export default TODOItem