import React from "react";
import ReactDOM from "react-dom";

const img = "https:/picsum.photos/200";

ReactDOM.render(
    <div>
        <h1 className="heading" contentEditable="true" spellCheck="false">My Favourite Foods</h1>
        <div>
            <img
                className="food-img"
                src={img + "?grayscale"}
                alt="food1"/>
            <img
                className="food-img"
                src={img}
                alt="food2"/>
            <img
                className="food-img"
                src={img + "?blur"}
                alt="food3"/>
        </div>
    </div>,
    document.getElementById("root")
);