import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
    color: "red",
    fontSize: "20px",
    textAlign: "center"
};

customStyle.color = "blue";

// The style property requires a js object. Not recommended to use.
ReactDOM.render(<h1 style={customStyle}>Hello World!</h1>, document.getElementById("root"));
