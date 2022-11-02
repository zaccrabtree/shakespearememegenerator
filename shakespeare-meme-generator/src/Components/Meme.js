import React from "react"
import ShakespeareQuotes from "../ShakespeareQuotes"
import "../index.css"

export default function Meme(){
    
    const [meme, setMeme] = React.useState({
        topText: "",
        quoteText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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
    //add a function to save the meme to the database
    //add a function to update the meme in the database
    //add a function to delete the meme from the database
    //add a function to get the meme from the database
    //add a function to get all the memes from the database
    

    function handleSubmit(event){
        event.preventDefault()
        const newMeme = {
            topText: meme.topText,
            quoteText: meme.quoteText,
            citeText: meme.citeText,
            randomImage: meme.randomImage
        }
        //post the meme to the database
        fetch("https://63376700132b46ee0be12138.mockapi.io/memes/memes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMeme)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    function handleUpdate(event){
        event.preventDefault()
        const updatedMeme = {
            topText: meme.topText,
            quoteText: meme.quoteText,
            citeText: meme.citeText,
            randomImage: meme.randomImage
        }
        console.log(updatedMeme)
    }
    function handleDelete(event){
        event.preventDefault()
        const deletedMeme = {
            topText: meme.topText,
            quoteText: meme.quoteText,
            citeText: meme.citeText,
            randomImage: meme.randomImage
        }
        console.log(deletedMeme)
    }

    return (
        <>
            <div className="container text-center">
                <div className="row border border-dark text-center">
                    <div className="float-start my-5 align-middle">
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
                    <div className="text-center">
                <div className="row center">
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
                    <div className="col-6 float-end my-5 p-2 text-center">
                    <h2 className="carousel-caption meme--text">{meme.quoteText}</h2>
                    <img src={meme.randomImage} className="rounded img-fluid"/>
                    <h2 className="top meme--text">{meme.topText}</h2>
                    </div>
                </div> 
                <br/>
                <br/>
            //add a button to save the meme
            //add a button to view all saved memes
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-primary" onClick={handleSubmit}>Save Meme</button>
                    <button className="btn btn-primary">View Saved Memes</button>
            </div>
            </div>
            </div>
        </>
    )
}