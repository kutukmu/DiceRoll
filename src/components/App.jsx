import React, { Component } from "react";
import Die from "./Die"
import "../css/App.css"
class App extends Component {



    render() {

        return <div className="container">
            <Die face={"one"} />
            <Die face={"five"} />
        </div>
    }
}


export default App;