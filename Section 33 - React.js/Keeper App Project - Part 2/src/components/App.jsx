import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const NoteList = () => (
    notes.map(note => (
        <Note
            key={note.key}
            id={note.id}
            title={note.title}
            content={note.content}
        />
    ))
);

function App()
{
    return (
        <div>
            <Header />
            <NoteList />
            <Footer />
        </div>
    );
}

export default App;
