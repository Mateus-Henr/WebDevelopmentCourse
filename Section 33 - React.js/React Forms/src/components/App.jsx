import React, {useState} from "react";

function App()
{
    const [name, setName] = useState("");
    const [displayName, setDisplayName] = useState("");

    // When an event gets triggered we can get data out of the event to use as we desire.
    function handleChange(event)
    {
        setName(event.target.value);
    }

    function handleClick(event)
    {
        setDisplayName(name);

        // Prevents realoading.
        event.preventDefault();
    }

    // HTML elements are responsible for handling their own states, so it's important to synchronize
    // the HTML's state with the React's, by using the value attribute. This is called a Controlled component.
    // Doing things as such, React manages the mutable state.
    return (
        <div className="container">
            <h1>Hello {displayName}</h1>
            <form onSubmit={handleClick}>
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="What's your name?"
                    value={name}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;