import React from "react";

export default function UpdateMeme(props) {
    return (
        <>
            <button className="btn btn-warning" onClick={() => props.updateMeme(props.elementId)}>Update</button>
        </>
    )
}