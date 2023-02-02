import React, {useState} from "react";

function App()
{
    // Storing an object.
    const [fullName, setFullName] = useState({
        firstName: "",
        lastName: ""
    });

    function handleChangeOnName(event)
    {
        const {value, name} = event.target;

        // Never access an event inside the function of a state component.
        // These are synthetic events created by React and should not be used in a state function.
        setFullName((prevState) =>
        {
            if (name === "fName")
            {
                return {firstName: value, lastName: prevState.lastName};
            }
            else if (name === "lName")
            {
                return {firstName: prevState.firstName, lastName: value};
            }
        });
    }

    return (
        <div className="container">
            <h1>Hello {fullName.firstName} {fullName.lastName}</h1>
            <form>
                <input onChange={handleChangeOnName}
                       name="fName"
                       placeholder="First Name"
                       value={fullName.firstName}
                />
                <input onChange={handleChangeOnName}
                       name="lName"
                       placeholder="Last Name"
                       value={fullName.lastName}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;