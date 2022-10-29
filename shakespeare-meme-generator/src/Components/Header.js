import React from "react"
import "../index.css"

export default function Header() {
    return (
        <>
        <header className="container">
            <div className="row alert alert-success">
                <div className="col-1 center">
                    <img src={require("../Images/shakespeareimage.png")} className="header--image"/>
                </div>
                <div className="col-10 center header--text">
                    <h1>Shakespeare Meme Generator</h1>
                </div>
                <div className="col-1 center">
                    <h6>Final Promineo Project</h6>
                </div>
            </div>
        </header>
        </>
    )
}       
