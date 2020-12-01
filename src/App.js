import React, { useCallback, useContext, useReducer, createContext, useEffect, useState } from 'react';
import './App.css';
import Board from './components/board'
import dice from './data'
import PrimarySearchAppBar from './components/myAppBar'
import { Paper, Button, ThemeProvider, Typography, InputBase } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import theme from './theme';
import Ui from './components/ui'
import GlobalState from './store/globalState'; 
import reducer from "./store/reducer"
 
//import <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


const initialAppGlobalState = {
  //isSettingsDialogOpen: false,
  rowsNum: 5,
  colsNum: 5,
  minRows: 2,
  minCols: 2,
  maxRows: Math.sqrt(dice.length),
  maxCols: Math.sqrt(dice.length),
  rolls: [],
  match: 0,
  totalTime: 10,
  countDown: 2
};


const makeRollDices = () => {
  console.log('makeRollDices')
  //console.log('appState', appState)
  let rowsNum = 5
  let colsNum = 5
  if (typeof(globalState)!== 'undefined'){
     rowsNum = initialAppGlobalState.rowsNum
     colsNum = initialAppGlobalState.colsNum
  }
   
  console.log('state rows and cols', rowsNum, colsNum)

  console.log(rowsNum, colsNum)
  let rolls = []
  //clone whole diceStack
  let diceStack = [...dice]
  while (diceStack.length > dice.length - (rowsNum * colsNum)) {
    let dieNumber = Math.floor(Math.random() * diceStack.length);
    let dieFace = Math.floor(Math.random() * 6);
    rolls.push(diceStack[dieNumber][dieFace])
    diceStack.splice(dieNumber, 1)
    //console.log('diceStack ', diceStack.length)
    //console.log('soglia ', dice.length - (rowsNum * colsNum))
  }
  console.log('dice number', rolls.length)
  console.log('rolls', rolls)
  return rolls
}

//initialAppGlobalState.rolls = makeRollDices();
//initialAppGlobalState.makeRollDices = makeRollDices;

//const App = ({ children }) => {
  const App = () => {
    
  const [globalState, globalDispatch] = useReducer(reducer, initialAppGlobalState)
  globalState.makeRollDices = makeRollDices

  return (
        <GlobalState.Provider value = {{globalState, globalDispatch}}>
          <ThemeProvider theme={theme}>
            <Ui display="block"/>
          </ThemeProvider>
        </GlobalState.Provider>
      ) 
}

export default App;