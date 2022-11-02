import React from "react";
import Meme from "./Meme";
import UpdateMeme from "./UpdateMeme";
import DeleteMeme from "./DeleteMeme";

//populate the table with the memes from the database
// function SavedMemes(props) {
//     var rows = [];
//     props.alldata.forEach(element => {
//         rows.push(
//         <tr key={element.id}>
//             <td>{element.id}</td>
//             <td>{element.topText}</td>
//             <td>{element.quoteText}</td>
//             <td>{element.citeText}</td>
//             <td>{element.randomImage}</td>
//             <td><UpdateMeme
//                 elementId={element.id}
//                 singledata={props.singledata}
//                 getMeme={props.getMeme}
//                 updateMeme={props.updateMeme}
//                 handleChange={props.handleChange} /></td>
//             <td>
//                 <DeleteMeme
//                 elementId={element.id}
//                 singledata={props.singledata}
//                 getMeme={props.getMeme}
//                 deleteMeme={props.deleteMeme} />
//             </td>
//         </tr>)
//     });
//     return(
//         <table className="table table-striped">
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Top Text</th>
//                     <th>Quote Text</th>
//                     <th>Cite Text</th>
//                     <th>Random Image</th>
//                     <th>Update</th>
//                     <th>Delete</th>
//                 </tr>
//             </thead>
//             <tbody>{rows}</tbody>
//         </table>
//         )
//     }
// export default function SavedMemes(props) {
//     var rows = [];
//     props.alldata.forEach(element => {
//         rows.push(
//         <tr key={element.id}>
//             <td>{element.id}</td>
//             <td>{element.topText}</td>
//             <td>{element.quoteText}</td>
//             <td>{element.citeText}</td>
//             <td>{element.randomImage}</td>
//             <td><UpdateMeme
//                 elementId={element.id}
//                 singledata={props.singledata}
//                 getMeme={props.getMeme}
//                 updateMeme={props.updateMeme}
//                 handleChange={props.handleChange}></UpdateMeme></td>
//             <td>
//                 <DeleteMeme
//                 elementId={element.id}
//                 singledata={props.singledata}
//                 getMeme={props.getMeme}
//                 deleteMeme={props.deleteMeme}></DeleteMeme>
//             </td>
//         </tr>)
//     });
//     return(
//         <table className="table table-striped">
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Top Text</th>
//                     <th>Quote Text</th>
//                     <th>Cite Text</th>
//                     <th>Random Image</th>
//                     <th>Update</th>
//                     <th>Delete</th>
//                 </tr>
//             </thead>
//             <tbody>{rows}</tbody>
//         </table>
//         )
//     }   


export default function SavedMemes() {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Saved Memes</h1>
                </div>
            </div>
            //create a table with the following columns: id, top text, quote, cite, update, delete
        <div className="row">
            <div className="col-12">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Top Text</th>
                            <th>Quote</th>
                            <th>Cite</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Top Text</td>
                            <td>Quote</td>
                            <td>Cite</td>
                            <td><UpdateMeme /></td>
                            <td><DeleteMeme /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        </>
    
            //use the data from the database to populate the table
            //add a button to update the meme
            //add a button to delete the meme
    )
}