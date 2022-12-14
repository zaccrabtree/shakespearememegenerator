import React from "react";
export default function DeleteMeme(props) {
    const deleteMeme = () => {
        fetch(`https://63376700132b46ee0be12138.mockapi.io/memes/memes/${props.elementId}`, {
            method: "DELETE",
        })
        .then((response) => response.json())
    //then set the state of the memes to the new array
        .then(() => {
            props.onClick();
        }
        );

    };
    

    return (
        <>
            <button className="btn btn-danger" onClick={deleteMeme}>Delete</button>
        </>
    )
}