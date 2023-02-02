// Props is read only, so we cannot modify it to update something up the tree.d
const ToDoItem = (props) =>
{
    function handleClick()
    {
        props.onChecked(props.id);// Triggering a function from up the tree.
    }

    return (
        <div onClick={handleClick}>
            <li>{props.value}</li>
        </div>
    );
}

export default ToDoItem;