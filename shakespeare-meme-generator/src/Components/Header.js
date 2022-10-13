import React from "react"


export default function Header() {
    return (
        <>
        <header className="container">
            <div className="row alert alert-success">
                <div className="col-11 text-center">
                    <h1>Shakespeare Meme Generator</h1>
                </div>
                <div className="col-1 text-center">
                    <h6>Final Promineo Project</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <img src={require("../Images/shakespeareimage.jpg")} className="header-image"/>
                </div>
            </div>
        </header>
        </>
    )
}       
