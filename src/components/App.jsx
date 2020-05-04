import React, { Component } from "react";
import RollDie from "./RollDie"
import "../css/App.css"
class App extends Component {



    render() {

        return <div className="container">
            <RollDie />
        </div>
    }
}


export default App;