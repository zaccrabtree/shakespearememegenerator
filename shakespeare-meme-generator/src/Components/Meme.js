import React from "react"
import MemesData from "../MemesData"

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState(MemesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <>
            <div className="container">
                <div className="row border border-dark">
                    <div className="col-6 float-start my-5 p-2 align-middle">
                            <input 
                                type="text" 
                                className="m-2 p-2" 
                                placeholder="Top text"
                                name="topText"
                                value={meme.topText}
                                onChange={handleChange}
                                />
                            <input 
                                type="text" 
                                className="m-2 p-2" 
                                placeholder="Bottom text"
                                name="bottomText"
                                value={meme.bottomText}
                                onChange={handleChange}
                                />
                            <button className="btn btn-success m-2 p-2" onClick={getMemeImage}>Get a New Meme Image</button>
                    </div>
                    <div className="col-6 float-end my-5 p-2">
                    <h2 className="carousel-caption my-5">{meme.topText}</h2>
                    <img src={meme.randomImage} className="rounded img-fluid meme--image"/>
                    <h2 className="carousel-caption">{meme.bottomText}</h2>
                    </div>
                </div> 
                <br/>
                <br/>
            </div>
        </>
    )
}