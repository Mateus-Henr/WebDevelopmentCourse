import React from "react";
import ReactDOM from "react-dom";
// Notice that the "require()" function used previously is derivative from node.

// It's also possible to use the "*" wildcard to import everything, but it needs to be given an alias.
import * as PI from "./math"; // Not recommended.

// Doesn't necessarily have to be the same name. It looks for the default export, having only one per file.
// import PI_Number, {doublePI, triplePI} from "./math"; // The names inside the curly braces do matter.

ReactDOM.render(
    <ul>
        <li>{PI.default}</li>
        <li>{PI.doublePI()}</li>
        <li>{PI.triplePI()}</li>
    </ul>,
    document.getElementById("root")
);