import React from "react"; // JSX feature of import.
import ReactDOM from "react-dom";

// Renders stuff on screen. React module has a compiler that transforms HTML code into JS code, which is called Babel.
ReactDOM.render(
    <div>
        <h1>Hello World</h1>
        <p>This is a paragraph.</p>
    </div>,
    document.getElementById("root"));