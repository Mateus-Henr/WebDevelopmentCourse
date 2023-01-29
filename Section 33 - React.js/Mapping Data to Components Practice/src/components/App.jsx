import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

const EntryList = () =>
{
    return emojipedia.map((entry) => (
        <Entry key={entry.id}
               id={entry.id}
               name={entry.name}
               emoji={entry.emoji}
               meaning={entry.meaning}
        />)
    );
}

function App()
{
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">
                <EntryList />
            </dl>
        </div>
    );
}

export default App;