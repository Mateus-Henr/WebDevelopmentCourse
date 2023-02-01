import React, {useState} from "react";

function App()
{
    const [headingText, setHeadingText] = useState("Hello");
    const [buttonBgColor, setButtonBgColor] = useState("white");

    function handleClick()
    {
        setHeadingText("Submitted");
    }

    function handleMouseOver()
    {
        setButtonBgColor("black");
    }

    function handleMouseOut()
    {
        setButtonBgColor("white");
    }

    return (
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?" />
            <button style={{backgroundColor: buttonBgColor}}
                    onClick={handleClick}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
            >Submit
            </button>
        </div>
    );
}

export default App;