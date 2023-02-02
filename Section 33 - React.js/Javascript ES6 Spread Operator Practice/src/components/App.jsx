import React, {useState} from "react";
import Item from "./Item";

function App()
{
    const [currItem, setCurrItem] = useState("");
    const [items, setItems] = useState([]);

    const ItemList = () =>
    {
        return items.map((item) => <Item value={item} />);
    }

    function handleChange(event)
    {
        setCurrItem(event.target.value);
    }

    function handleClickAddItem()
    {
        if (currItem.length)
        {
            setItems([...items, currItem]);
        }

        setCurrItem("");
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={currItem}
                />
                <button onClick={handleClickAddItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    <ItemList />
                </ul>
            </div>
        </div>
    );
}

export default App;