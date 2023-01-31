import React from "react";

function App()
{
    let isDone = false;

    const strikeThrough = {textDecoration: "line-through"};

    return (
        <div>
            <p style={isDone ? strikeThrough : null}>Buy Milk</p>
            <button onClick={() => document.getElementById("root").style.textDecoration = "line-through"}>
                Change to strike through
            </button>
            <button onClick={() => document.getElementById("root").style.textDecoration = "null"}>
                Change back
            </button>
        </div>
    );
}

export default App;

// Declarative programming is when the UI changes upon the state.
// Imperative programming is telling the code what to do.
// React Hooks allow us to read/modify the state of our app so that components get re-rendered accordingly.