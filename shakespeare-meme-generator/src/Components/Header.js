import React from "react"
import "../index.css"

export default function Header() {
    return (
        <header className="container-fluid flex-container">
            <div className="row alert header--banner">
                <div className="col-2 center">
                    <img src={require("../Images/shakespeareimage.png")} className="header--image"/>
                </div>
                <div className="col-10 center header--text">
                    <h1>Shakespeare Meme Generator</h1>
                </div>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">MemeGenerator</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/savedmemes">Saved Memes</a>
                                    </li>
                                </ul>

            </div>
        </div>
    </nav>
</div>
</div>
</div>
        </header>
    )
}       

