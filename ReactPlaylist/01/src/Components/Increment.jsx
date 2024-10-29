import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);       // Initial count, will be set by user
    const [initialCount, setInitialCount] = useState(''); // To store user's initial input

    // Function to update count when user clicks 'Set Initial Count'
    const setInitialCountValue = () => {
        const parsedCount = parseInt(initialCount, 10);
        if (!isNaN(parsedCount)) {
            setCount(parsedCount); // Set count only if the input is a number
        }
    };

    return (
        <div>
            <h2>Set Initial Count</h2>
            <input
                type="number"
                value={initialCount}
                onChange={(e) => setInitialCount(e.target.value)}
                placeholder="Enter initial count"
            />
            <button onClick={setInitialCountValue}>Set Initial Count</button>

            <h2>Counter: {count}</h2>

            <button className="ButtonToDo" onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <button className="ButtonToDo" onClick={() => setCount(count - 1)}>
                Decrement
            </button>

            <button className="ButtonToDo" onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
};

export default Counter;


