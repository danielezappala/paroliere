import React, { Fragment, useState, useContext, useEffect} from 'react';
import Board from './board'
import Timer from './timer'
import PrimarySearchAppBar from './myAppBar'
import { Button, Typography, Box,} from '@material-ui/core'
import GlobalState from "../store/globalState"


const Ui = (() => {

    const {globalState, globalDispatch} = useContext(GlobalState);
    
    console.log('Global State on UI')
   
  useEffect(()=>{
        globalState.rolls = globalState.makeRollDices()
    },[globalState.rolls]) 

    const timer = globalState.timer;
    const match = globalState.match;
    const [rollDiceBtnDisable, setRollDiceBtnDisable] = useState(false);

    function toggleRollDiceBtn() {
        setRollDiceBtnDisable(!rollDiceBtnDisable);
    }

    console.log('children rolls ', globalState.rolls);

    const handleEvent = (event,key) => {
        console.log(event)
        switch (event.type) {
          case 'click':
            console.log('clicked ', event.target); 
            //globalState.rolls = globalState.makeRollDices()
            globalDispatch({type:"INC_MATCH"}) 
            break
          default:
            console.log('unhandled ', event.type)
      };
    }
     
    return (

        <Fragment>
            <PrimarySearchAppBar/>   
            <Box
                width='350px'
                padding="10px 5px"
                border='5px'
                display="block"
                alignItems="center"
                justifyContent="center" 
            >
                <Box 
                    padding="0px 5px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography
                        variant='h4'>
                        Match {globalState.match}
                    </Typography>

                    <Button
                        color="secondary" disabled = {rollDiceBtnDisable}
                        variant='contained' key={'rollDiceBtn'}
                        onClick={(e, key) => handleEvent(e, key)}>
                        Roll dice
                    </Button>

                </Box>
            
                {(globalState.rolls.length > 0 && typeof (globalState.rolls) !== 'undefined') ?
                <Board
                    rolls={globalState.rolls}
                    rowsNum={globalState.rowsNum}
                    colsNum={globalState.colsNum}
                />
                : <div></div>}
                
                <Timer totalTime={globalState.totalTime} countDown={globalState.countDown} toggleRollDiceBtn={() => toggleRollDiceBtn()}/>
            </Box>
        </Fragment>
    )})

export default Ui