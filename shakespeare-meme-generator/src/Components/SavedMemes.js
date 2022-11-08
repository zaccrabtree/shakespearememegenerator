import React from "react";
import Meme from "./Meme";
import UpdateMeme from "./UpdateMeme";
import DeleteMeme from "./DeleteMeme";

//populate the table with the memes from the database
export default function SavedMemes(props) {
    const [memes, setMemes] = React.useState([]);
    React.useEffect(() => {
        fetch("https://63376700132b46ee0be12138.mockapi.io/memes/memes")
            .then((response) => response.json())
            .then((data) => {
                setMemes(data);
            });
    }, []);
   
        var rows = [];
        memes.forEach(element => {
            rows.push(
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.topText}</td>
                <td>{element.quoteText}</td>
                <td>{element.citeText}</td>
                <td>{element.randomImage}</td>
                <td><UpdateMeme
                    elementId={element.id}
                    singledata={props.singledata}
                    getMeme={props.getMeme}
                    updateMeme={props.updateMeme}
                    handleChange={props.handleChange}/></td>
                <td>
                    <DeleteMeme
                    elementId={element.id}
                    singledata={props.singledata}
                    getMeme={props.getMeme}
                    deleteMeme={props.deleteMeme}
                    handleChange={props.handleChange}/>
                </td>
            </tr>)
        });

    
    return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Top Text</th>
                        <th>Quote Text</th>
                        <th>Cite Text</th>
                        <th>Random Image</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
            )
        }   
    

