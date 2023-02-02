import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// What the spread operator does?
// It expands individual items to make things easier.

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", ...citrus, "Banana", "Coconut"]; // Pushing one array into another.

console.log(fruits);

// Also works with objects.
const fullName = {
    fName: "James",
    lName: "Bond"
}

const user = {
    id: 1,
    username: "myusername",
    ...fullName
}

console.log(user);