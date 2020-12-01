import React, { useState, useEffect } from 'react';
import {Button, Typography, Box} from '@material-ui/core'
import useSound from 'use-sound';
//import gongMp3 from  '../sounds/chinese-gong.mp3'
import dingMp3 from  '../sounds/ding.mp3'



const Timer = ({totalTime, countDown, toggleRollDiceBtn}) => {


  const [seconds, setSeconds] = useState(totalTime);
  const [isActive, setIsActive] = useState(false);
  const [isResetDisabled, setResetDisabled] = useState(true)

  function toggle() {
    setIsActive(!isActive);
    toggleRollDiceBtn()
  }

  function reset() {
    setSeconds(totalTime);
    setIsActive(false);
    setResetDisabled(true)
  }

  const [ding] = useSound(dingMp3);
  //const [gong] = useSound(gongMp3);
  const [gong] = useSound(dingMp3);


useEffect(() => {
    let interval = null;

    if (isActive && seconds >0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1)
            }, 1000); 
    if (seconds === totalTime - totalTime/2 || seconds <= countDown)  
        {
            ding()
        }
    }
    else if (seconds === 0){
        gong()
    }
    if (!isActive && seconds<totalTime){
      setResetDisabled(false)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds, isResetDisabled])


  return (
    <Box 
        padding="0px 5px"
        display="flexbox" 
        alignItems="center"
        justifyContent="space-between"
      >     
        <Button variant='contained' color="secondary" className={`${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Play'}
        </Button>
        <Button 
          variant='contained' 
          color="secondary"  
          disabled={isResetDisabled}
          onClick={reset}>
          Reset
        </Button>
        <Typography variant='h4'>
        {seconds}s
        </Typography>
    </Box>
  );
};

export default Timer;
