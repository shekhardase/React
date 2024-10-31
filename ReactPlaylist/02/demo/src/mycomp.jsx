import React from "react";
import { useEffect, useState } from "react";
// import <index className="css"></index>
import './App.css';

const MyComponent = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(() => {
        console.log("My Componend is Mounting.....")
        return function () {
            console.log("Being Processed");
        }
    }
        , [])

    useEffect(() => {
        console.log("count updated");
        return function () {
            console.log("Returning count -", { count });

        }
    }, [count])


    useEffect(() => {
        console.log("count updated");

    }, [count2])




    return (
        <div>
            <p>count - {count}</p>


            <button onClick={() => {
                setCount(count + 1)
            }}>
                Update
            </button>

            <p>count2 - {count2}</p>
            <button onClick={() => {
                setCount2(count2 + 2)
            }}>
                Update2
            </button>
        </div>
    )
}



export default MyComponent;