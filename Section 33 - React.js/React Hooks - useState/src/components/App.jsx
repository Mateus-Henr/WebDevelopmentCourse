import React, {useState} from "react";

// Hooks - useState
// A hook must be used inside a functional component.

function App()
{
    // The first value that we pass to the function is our starting state, the second is the function that modifies the
    // value.
    // Notice that it can be a constant since the return value is an array.
    // By using state, we only update parts that utilize the state.
    const [count, setCount] = useState(0);

    // We can use JS destructuring to simplify the code and follow the good practices.
    // It works by its position and the name gets mapped to a value.
    // const [red, green, blue] = [9, 132, 277];
    //
    // console.log(blue);

    function increase()
    {
        setCount(count + 1);
        console.log("I got clicked! Current count = " + count);

        // Primal way of doing things, but the concept is that everytime something updates, you have to rerender the ReactDOM.
        // ReactDOM.render(
        //     <div className="container">
        //         <h1>{count}</h1>
        //         <button onClick={increase}>+</button>
        //     </div>,
        //     document.getElementById("root")
        // );
    }

    function decrease()
    {
        setCount(count - 1);
        console.log("I got clicked! Current count = " + count);
    }

    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default App;