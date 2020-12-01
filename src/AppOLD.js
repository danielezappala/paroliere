import React, { Component, Fragment, useState, useContext } from 'react';
import './App.css';
import Board from './components/board'
import dice from './data'
import PrimarySearchAppBar from './components/myAppBar'
import { Paper, Button, ThemeProvider, Typography, InputBase } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import theme from './theme';
import Ui from './components/ui'
import Store from "./store/globalState";
import {Context} from "./store/globalState"
 
//import <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dice: dice,
      rowsNum: 5,
      colsNum: 5,
      rolls: this.rollsDice(),
      match: 0,
      totalTime: 10,
      countDown: 2
    }
    this.handleEvent = this.handleEvent.bind(this);
    this.decrementRows = this.decrementRows.bind(this)
   
  }

  
    
  componentDidMount() {
    this.state.rolls = this.rollsDice();
    this.setState(() => (
      { match: this.state.match + 1 }))
  }


  changeRowsNum(value) {
    this.setState({
      rowsNum: this.state.rowsNum + value,
      colsNum: this.state.colsNum + value,
    })
    console.log('new rowsNum', this.state.rowsNum)
    console.log('new colsNum', this.state.colsNum)
  }

  decrementRows() {
    console.log('decrement rows number')
    this.changeRowsNum(-1);
  }

  handleEvent(event, id) {
    console.log('parent handleEvent')
    event.stopPropagation();
    switch (event.type) {
      case 'click':
        console.log('clicked ', event.target, id);
        globalDispatch({type:"INC_MATCH"})
        this.setState(() => (
          {
            rolls: this.rollsDice(),
          }))
        break
      default:
        console.log('unhandled ', event.type)
    }
  }


  rollsDice() {
    console.log('rollsDice')
    const [globalState, globalDispatch] = useContext(Context);
    let rowsNum = 0
    let colsNum = 0
    if (typeof (this.state) === 'undefined') {
      rowsNum = 5
      colsNum = 5
      console.log('default rows and cols', rowsNum, colsNum)
    }
    else {
      rowsNum = this.state.rowsNum
      colsNum = this.state.colsNum
      console.log('state rows and cols', rowsNum, colsNum)
    }
    console.log('state type ', typeof (this.state))
    console.log('state ', this.state)
    console.log(rowsNum, colsNum)
    let rolls = []
    //clone whole diceStack
    let diceStack = [...dice]
    while (diceStack.length > dice.length - (rowsNum * colsNum)) {
      let dieNumber = Math.floor(Math.random() * diceStack.length);
      let dieFace = Math.floor(Math.random() * 6);
      rolls.push(diceStack[dieNumber][dieFace])
      diceStack.splice(dieNumber, 1)
      console.log('diceStack ', diceStack.length)
      console.log('soglia ', dice.length - (rowsNum * colsNum))
    }
    console.log('dice number', rolls.length)
    return rolls
  }
  
  render() {
    return (
      <Store>
        <ThemeProvider theme={theme}>
          <Ui parentState = {this.state} handleEvent={this.handleEvent}
          />
        </ThemeProvider>
      </Store>
    )
  }
}

export default App;
