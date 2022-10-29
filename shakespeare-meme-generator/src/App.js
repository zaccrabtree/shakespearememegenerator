import React from "react"
import Header from "./Components/Header"
import Meme from "./Components/Meme"
import SavedMemes from "./Components/SavedMemes"
import About from "./Components/About"
import { Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={ <Meme/> } />
                <Route path="about" element={ <About/> } />
                <Route path="savedmemes" element={ <SavedMemes/> } />
            </Routes>
        </div>
        </>
    )
}
