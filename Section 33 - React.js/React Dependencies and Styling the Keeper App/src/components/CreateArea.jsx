import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {Zoom} from "@material-ui/core";

function CreateArea(props)
{
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [isZoomedIn, setIsZoomedIn] = useState(false);

    function handleChange(event)
    {
        const {name, value} = event.target;

        setNote(prevNote =>
        {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event)
    {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isZoomedIn && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                )}
                <textarea
                    name="content"
                    onClick={() => setIsZoomedIn(!isZoomedIn)}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={() => isZoomedIn ? 3 : 1}
                />
                {isZoomedIn && (
                    <Zoom in={isZoomedIn}>
                        <Fab onClick={submitNote}>
                            <AddIcon />
                        </Fab>
                    </Zoom>
                )}
            </form>
        </div>
    );
}

export default CreateArea;