import React from "react"
import MemesData from "../MemesData"
import ShakespeareQuotes from "../ShakespeareQuotes"
import "../index.css"

export default function Meme(){
    
    const [meme, setMeme] = React.useState({
        topText: "",
        quoteText: "",
        citeText: "",
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
                <div className="text-center">
                <div className="row meme">
                            <select 
                                value={meme.quoteText} 
                                className="btn btn-secondary dropdown-toggle"
                                name="quoteText"
                                onChange={handleChange}
                                >
                    {ShakespeareQuotes.data.quotes.map((quote, index) => (
                            <option 
                                value={meme.quote} 
                                key={index}>
                                {quote.line}
                            </option>
                            ))}
                            </select>
                </div>
                </div>

                <div className="row border border-dark">
                    <div className="col-6 float-start my-5 align-middle">
                            <input 
                                type="text" 
                                className="m-2 p-2" 
                                placeholder="Top text"
                                name="topText"
                                value={meme.bottomText}
                                onChange={handleChange}
                            />
                            <button className="btn btn-success m-2 p-2" onClick={getMemeImage}>Get a New Meme Image</button>
                    </div>
                    <div className="col-6 float-end my-5 p-2 text-center">
                    <h2 className="carousel-caption meme--text">{meme.quoteText}</h2>
                    <img src={meme.randomImage} className="rounded img-fluid"/>
                    <h2 className="top meme--text">{meme.topText}</h2>
                    </div>
                </div> 
                <br/>
                <br/>
            </div>
        </>
    )
}