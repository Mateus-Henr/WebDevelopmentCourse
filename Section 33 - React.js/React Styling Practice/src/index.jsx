//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const currHour = new Date().getHours();
let greeting = "Good Morning";
const hourColorStyle = {color: "red"};

if (currHour >= 12 && currHour < 18)
{
    greeting = "Good Evening";
    hourColorStyle.color = "green";
} else if (currHour >= 18 && currHour <= 23)
{
    greeting = "Good Night";
    hourColorStyle.color = "blue";
}

ReactDOM.render(<h1 style={hourColorStyle}>{greeting}</h1>, document.getElementById("root"));