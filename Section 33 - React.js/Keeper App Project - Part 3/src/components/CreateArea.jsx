import React, {useState} from "react";

function CreateArea(props)
{
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function addNote(event)
    {
        props.addNote(note);

        event.preventDefault();
    }

    function handleChange(event)
    {
        const {value, name} = event.target;

        setNote(prevState =>
        {
            return (
                {
                    ...prevState,
                    [name]: value
                }
            );
        });
    }

    return (
        <div>
            <form onSubmit={addNote}>
                <input name="title"
                       placeholder="Title"
                       onChange={handleChange}
                       value={note.title}
                />
                <textarea name="content"
                          placeholder="Take a note..."
                          rows="3"
                          onChange={handleChange}
                          value={note.content}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;