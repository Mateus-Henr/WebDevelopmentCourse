import React from "react";
import Card from "./Card";
import contacts from "../contacts";

// Components have to have a property called "key" that's used to identify uniquely each component.
// This property is required by React in order to efficiently render components, and ensure the list order when creating
// its virtual DOM.
// When it comes to special props such as "key", we cannot access them down the tree.
function createCard(contact)
{
    return (
        <Card key={contact.id}
              id={contact.id}
              name={contact.name}
              img={contact.imgURL}
              tel={contact.phone}
              email={contact.email}
        />
    );
}

function App()
{
    return (
        <div>
            <h1 className="heading">My Contacts</h1>

            {contacts.map(createCard)}
        </div>
    );
}

export default App;