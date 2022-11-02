import React from "react";

export default function DeleteMeme(props) {
    return (
        <>
            <button className="btn btn-danger" onClick={() => props.deleteMeme(props.elementId)}>Delete</button>
        </>
    )
}