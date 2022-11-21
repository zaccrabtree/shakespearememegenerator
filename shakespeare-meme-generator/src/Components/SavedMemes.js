import React from "react";
import UpdateMeme from "./UpdateMeme";
import DeleteMeme from "./DeleteMeme";
import "../index.css"

//populate the table with the memes from the database
export default function SavedMemes(props) {
    const [memes, setMemes] = React.useState([]);
    const [updateMeme, setUpdateMeme] = React.useState(false);
    React.useEffect(() => {
        fetch("https://63376700132b46ee0be12138.mockapi.io/memes/memes")
            .then((response) => response.json())
            .then((data) => {
                setMemes(data);
            });
    }, []);
    //function that will setState of the memes to the new array
    const updateMemes = () => {
        fetch("https://63376700132b46ee0be12138.mockapi.io/memes/memes")
            .then((response) => response.json())
            .then((data) => {
                setMemes(data);
            });
    };
    
        var rows = [];
        memes.forEach(element => {
            rows.push(
            <tr key={element.id}>
                <td><div className="col-12 my-5 p-2 text-center">
                    <h2 className="carousel-caption meme--text">{element.quoteText}</h2>
                    <img src={element.randomImage} className="rounded meme--image"/>
                    <h2 className="top meme--text">{element.topText}</h2>
                    </div></td>
                <td><UpdateMeme
                    elementId={element.id}
                    singledata={props.singledata}
                    getMeme={props.getMeme}
                    updateMeme={props.updateMeme}
                    handleChange={props.handleChange}
                    onClick={updateMemes}
                    /></td>
                <td>
                    <DeleteMeme
                    elementId={element.id}
                    singledata={props.singledata}
                    getMeme={props.getMeme}
                    deleteMeme={props.deleteMeme}
                    handleChange={props.handleChange}
                    onClick={updateMemes}/>
                </td>
            </tr>)
        });

    
    return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Meme Image</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
            )
        }   
