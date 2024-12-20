import React, { useState } from "react";


function Button() {

    const [count, setCount] = useState(0);
    // let done = false;
    const [Done, setDone] = useState(false);


    function handleClick() {
        setCount(count + 1);
        if (count > 5) {
            alert("You have clicked the button 5 times");
            setDone(true)
        }
    }

    return (
        <div>
            {Done ? <h2 style={{ color: 'red' }}>Done</h2> :
                <button onClick={handleClick}>Click me {count} times</button>}
        </div>
    );
}

export default Button;