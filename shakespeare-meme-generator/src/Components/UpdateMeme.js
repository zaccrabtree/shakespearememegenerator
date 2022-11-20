import React from "react";

export default function UpdateMeme(props) {
//should take in the id of the meme that is being updated and populate a component like Meme.js with the data from the meme that is being updated
    const [topText, setTopText] = React.useState("");
    const [quoteText, setQuoteText] = React.useState("");
    const [citeText, setCiteText] = React.useState("");
    const [randomImage, setRandomImage] = React.useState("");
    const [id, setId] = React.useState("");
    const [meme, setMeme] = React.useState([]);
    React.useEffect(() => {
        fetch(`https://63376700132b46ee0be12138.mockapi.io/memes/memes/${props.elementId}`)
            .then((response) => response.json())
            .then((data) => {
                setMeme(data);
                setTopText(data.topText);
                setQuoteText(data.quoteText);
                setCiteText(data.citeText);
                setRandomImage(data.randomImage);
                setId(data.id);
            });
    }, []);
    const updateMeme = () => {
        fetch(`https://63376700132b46ee0be12138.mockapi.io/memes/memes/${props.elementId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                topText: topText,
                quoteText: quoteText,
                citeText: citeText,
                randomImage: randomImage,
                id: id,
            }),
        })
        .then((response) => response.json())
        .then(() => {
            props.onClick();
        }
        );
    };

    return (
        <>
            
            <div className="form-group">
                <label htmlFor="topText">Top Text</label>
                <input

                    type="text"
                    className="form-control"
                    id="topText"
                    value={topText}
                    onChange={(e) => setTopText(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="quoteText">Quote Text</label>
                <input
                    type="text"
                    className="form-control"
                    id="quoteText"
                    value={quoteText}
                    onChange={(e) => setQuoteText(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={updateMeme}>Update</button>
        </>
    )
}