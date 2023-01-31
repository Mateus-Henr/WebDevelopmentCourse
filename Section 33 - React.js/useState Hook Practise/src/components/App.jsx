import React, {useState} from "react";

function getCurrTime()
{
    return new Date().toLocaleTimeString();
}

function App()
{
    //Challenge:
    //1. Given that you can get the current time using:
    const [time, setTime] = useState(getCurrTime());

    //Show the latest time in the <h1> when the Get Time button
    //is pressed.

    //2. Given that you can get code to be called every second
    //using the setInterval method.
    //Can you get the time in your <h1> to update every second?
    function updateTime()
    {
        setTime(getCurrTime());
    }

    setInterval(updateTime, 1000);

    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={() => setTime(getCurrTime())}>Get Time</button>
        </div>
    );
}

export default App;