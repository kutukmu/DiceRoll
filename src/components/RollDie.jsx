import React, { Component } from "react";
import Die from "./Die"
import "../css/Rooldice.css"

class RollDie extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props) {
        super(props);

        this.state = { first: "one", second: "two", rolling: false }
        this.rool = this.rool.bind(this)
    }

    rool() {

        this.setState({
            first: this.props.sides[Math.floor(Math.random() * this.props.sides.length)],
            second: this.props.sides[Math.floor(Math.random() * this.props.sides.length)],
            rolling: true
        })



        setTimeout(() => {

            this.setState({
                rolling: false
            })

        }, 1000)
    }



    render() {

        return <div className="roll-container">
            <div className="dice-container">
                <Die face={this.state.first} roll={this.state.rolling} />
                <Die face={this.state.second} roll={this.state.rolling} />
            </div>
            <button onClick={this.rool} disabled={this.state.rolling}> {(this.state.rolling ? "Rolling..." : "Dice Roll!")} </button>
        </div>
    }
}

export default RollDie