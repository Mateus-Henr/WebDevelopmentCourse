import React from "react";
import ReactDOM from "react-dom";

const fName = "Mateus";
const mName = "Henrique";

// We can only write expressions inside curly braces, we cannot use expressions sucha as if statements.
ReactDOM.render(
    <div>
        <h1>Hello, {`${fName} ${mName}`}!</h1>
        <p>Your lucky number is {Math.floor(Math.random() * 10 + 1)}.</p>
    </div>, document.getElementById("root")
);