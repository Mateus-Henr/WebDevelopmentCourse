// HTML attributes have to go in the HTML elements, they cannot go in custom elements.
function Card(props)
{
    return (
        <div className="my-style">
            <h2>{props.name}</h2>
            <img
                src={props.img}
                alt="avatar_img"
            />
            <p>{props.phoneNumber}</p>
            <p>{props.email}</p>
        </div>
    );
}

export default Card;