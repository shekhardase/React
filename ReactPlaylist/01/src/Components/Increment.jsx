import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);       // Initial count, will be set by user
    const [value, setValue] = useState('Shekhar');
    const [state, setState] = useState("Zero");

    return (
        <div>

            <h2>Counter: {count}</h2>



            <h5>Value is : {value}</h5>
            <button onClick={() => {
                setValue("React");
            }}>
                Change
            </button>

            <button className="ButtonToDo" onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <button className="ButtonToDo" onClick={() => setCount(count - 1)}>
                Decrement
            </button>

            <button className="ButtonToDo" onClick={() => setCount(0)}>
                Reset
            </button>

            <button onClick={() => {
                if (count % 2 == 0) {
                    setState("Even")
                }
                else {
                    setState("Odd")
                }
            }}>
                Check
            </button>
            <h4 >The number is {state} (this change is made with button)</h4>
            <h2> Number is {count % 2 === 0 ? " Even" : "Odd"} (This is inLine change)</h2>

            {/* <h2>NUmber is {(count@)}</h2> */}
        </div >
    );
};

export default Counter;


