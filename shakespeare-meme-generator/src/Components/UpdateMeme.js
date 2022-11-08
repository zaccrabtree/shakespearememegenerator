import React from "react";

export default function UpdateMeme(props) {
    const updateMeme = () => {
        //should take the meme id and route to the MemeGenerator component with the meme id
        //then the MemeGenerator component should populate the form with the meme data
        //then the user can update the meme and save it

        //fetch the meme data from the database
        fetch(`https://63376700132b46ee0be12138.mockapi.io/memes/memes/${props.elementId}`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            props.getMeme(data);
        });

        //populate the MemeGenerator Component with the meme data
        
        props.updateMeme(props.singledata);
        props.handleChange(props.singledata);
    };



    return (
        <>
            <button className="btn btn-warning" onClick={updateMeme}>Update</button>
        </>
    )
}