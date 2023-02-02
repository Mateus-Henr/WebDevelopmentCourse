import React, {useState} from "react";

function App()
{
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    function handleChangeOnContact(event)
    {
        const {value, name} = event.target;

        setContact((prevState) =>
        {
            if (name === "fName")
            {
                return {
                    fName: value,
                    lName: prevState.lName,
                    email: prevState.email
                };
            }
            else if (name === "lName")
            {
                return {
                    fName: prevState.fName,
                    lName: value,
                    email: prevState.email
                };
            }
            else if (name === "email")
            {
                return {
                    fName: prevState.fName,
                    lName: prevState.lName,
                    email: value
                };
            }
        });
    }

    return (
        <div className="container">
            <h1>
                Hello {contact.fName} {contact.lName}
            </h1>
            <p>{contact.email}</p>
            <form>
                <input
                    name="fName"
                    placeholder="First Name"
                    value={contact.fName}
                    onChange={handleChangeOnContact}
                />
                <input
                    name="lName"
                    placeholder="Last Name"
                    value={contact.lName}
                    onChange={handleChangeOnContact}
                />
                <input
                    name="email"
                    placeholder="Email"
                    value={contact.email}
                    onChange={handleChangeOnContact}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;