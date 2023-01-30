import React from "react";
import Login from "./Login";

let isLoggedIn = false;

const currentTime = new Date().getTime();

console.log(currentTime);

// "null" can be used to render nothing, but using "&&", as shown below, is better.
function App()
{
    return (
        <div className="container">
            {/*{(isLoggedIn) ? <h1>Hello</h1> : <Login />}*/
                (currentTime > 12) && <h1>Why are you still working?</h1>}
        </div>
    );
}

export default App;