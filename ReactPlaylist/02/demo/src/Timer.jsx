import React from "react";
import { useEffect, useState } from "react";

const Timer = () => {


    const [Time, setTime] = useState(0);

    // useEffect((),)
    useEffect(() => {

        console.log("add new intervel" ,{Time});
        
        
        const Timer = setInterval(() => {
            setTime(Time + 1)
        }, 1000);

        return function () {
            console.log("intervel Removed" , {Time});
            clearInterval(Timer);
            
        }
    }
        , [Time]);

    return (
        <div>
            <h1>
                Stop Watch
            </h1>

            <p>Current Time {Time}</p>



        </div>
    )
}

export default Timer;