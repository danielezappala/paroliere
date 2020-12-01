import React, { Component, useState } from 'react'
import dice from '../data'
import math from '../funcLibrary/math'

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice: dice,
            rolls: []
        }
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(event, id) {
        event.stopPropagation();
        switch (event.type) {
            case 'click':
                console.log('clicked ', event.target, id);
                this.rollsDice()
                break
            default:
                console.log('unhandled ', event.type)
        }
    }

    rollsDice() { 
        //clona l'array dice in rolls 
        let rolls = []
        rolls = dice.map(die => {
            const roll = Math.floor( Math.random() * ( 6 - 1 + 1 ) ) + 1
            console.log('roll', roll)
            return [die[roll]]
        })
        this.setState({'rolls':rolls})
        console.log('rolls ', this.state.rolls)
    }
    componentDidMount() {

    }
    render() {
        console.log('rolls ', this.state.rolls)
        return (
            
            <div>
                <button key='1' onClick={(e, key) => this.handleEvent(e, key)}>
                    Roll dice
            </button>
                <div>
                    {
                    this.state.rolls.length !== 0 ? (this.state.rolls.map((die,index) => {
                        return (
                            <div key={index}>
                                {die}
                            </div>
                        )
                    })) : <div></div> }
                </div>
            </div>
        )
    }
}

export default Dice