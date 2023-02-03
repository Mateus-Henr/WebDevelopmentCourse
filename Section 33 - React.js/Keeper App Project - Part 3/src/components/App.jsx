import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App()
{
    const [notes, setNotes] = useState([]);

    const NoteList = (props) =>
    {
        return notes.map((note, idx) => (
            <Note
                key={idx}
                id={idx}
                title={note.title}
                onDelete={props.deleteNote}
                content={note.content}
            />)
        );
    }

    function addNote(note)
    {
        setNotes([...notes, note]);
    }

    function deleteNote(id)
    {
        setNotes(prevState => prevState.filter((note, idx) => idx !== id))
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={addNote} />
            <NoteList deleteNote={deleteNote} />
            <Footer />
        </div>
    );
}

export default App;