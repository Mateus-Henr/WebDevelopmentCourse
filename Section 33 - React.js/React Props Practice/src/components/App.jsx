import React from "react";
import Card from "./Card";
import {CONTACTS} from "./contacts";

const contactList = CONTACTS.map((contact) =>
{
    return (
        <Card name={contact.name}
              img={contact.imgURL}
              phone={contact.phone}
              email={contact.email}
        />
    );
});

function App()
{
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contactList}
        </div>
    );
}

export default App;