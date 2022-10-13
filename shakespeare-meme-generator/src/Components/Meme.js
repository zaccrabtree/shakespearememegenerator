import React from "react"
import MemesData from "../MemesData"

export default function Meme(){
    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage(){
        const memesArray = MemesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }
    return (
        <>
            <div className="container">
                <div className="row border border-dark">
                    <div className="col-6 float-start my-5 p-2 align-middle">
                            <input type="text" className="m-2 p-2" placeholder="Top text"/>
                            <input type="text" className="m-2 p-2" placeholder="Bottom text"/>
                            <button className="btn btn-success m-2 p-2" onClick={getMemeImage}>Get a New Meme Image</button>
                    </div>
                    <div className="col-6 float-end my-5 p-2 ">
                    <img src={memeImage} className="rounded img-fluid"/>
                    </div>
                </div> 
                <br/>
                <br/>
            </div>
        </>
    )
}