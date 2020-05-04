import React, { Component } from "react";
import "../css/Die.css"


class Die extends Component {




    render() {
        const props = this.props;


        return <i className={`Die fas fa-dice-${props.face} ${props.roll && "shake"}`}></i>
    }
}


export default Die;