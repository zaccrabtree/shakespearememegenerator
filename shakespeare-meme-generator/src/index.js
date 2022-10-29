import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, BrowserRouter as Route} from "react-router-dom"
import App from "./App"

//use browser router to route to different pages
ReactDOM.render(
    <BrowserRouter>
            <App />
    </BrowserRouter>,
    document.getElementById("root")
)
// ReactDOM.render(<App />, document.getElementById("root"))
