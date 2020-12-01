import React, { useEffect, useState, useContext, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import GlobalState from "../store/globalState"
import Slider from '@material-ui/core/Slider';
import FormControl from '@material-ui/core/FormControl';
 
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



function reducer(state,{field,value}){
  return {
    ...state,
    [field]:value
  }
}
 

export default function FullScreenDialog(props) {
  console.log('props ', props)

  const classes = useStyles();
  const { globalState, globalDispatch } = useContext(GlobalState);

  

  const [state, dispatch] = useReducer(reducer, 
    {
      rowsNum: globalState.rowsNum,
      colsNum: globalState.colsNum,
      minRows: globalState.minRows,
      minCols: globalState.minCols,
      maxRows: globalState.maxRows,
      maxCols: globalState.maxCols,
    }
  )

  console.log('state ',state)
  
  const {rowsNum,colsNum,minRows,minCols, maxRows,maxCols} = state
  
  const [settingsDialogVisibility, setSettingsDialogVisibility] = React.useState(true)
  
  useEffect(() => {
    
  }, []);

  const onChange= (e) => {
    console.log('changing local state of ',e.target.name)
    dispatch({field: e.target.name, value: e.target.value})
  }

  const valuetext = (value) => {
    return `${value}`;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    globalDispatch({
      type: "CHANGE_ROWSNUM",
      payload: rowsNum
    })

    globalDispatch({
      type: "CHANGE_COLSNUM",
      payload: colsNum
    })

   //globalDispatch({ type: "CLOSE_SETTINGS" })
   setSettingsDialogVisibility(false)
  }

  return (
    <div>
      <Button variant="outlined" color="primary">
        Open full-screen dialog
      </Button>
      <Dialog  
              open={settingsDialogVisibility} 
              onClose={props.onClose} 
              TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={props.onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Settings
            </Typography>
           
          </Toolbar>
        </AppBar>
        <form  key='settingForm' onSubmit={handleSubmit}>
          <FormControl >
          
            <List>
              {/*Object.keys(globalState).map(function(key)*/}

              <ListItem key={'1'} button>
                <ListItemText primary='Number of rows: ' 
                  secondary={rowsNum} 
                />
                <Slider
                  key={`slider-rowsNum`} 
                  name="rowsNum"
                  defaultValue={rowsNum}
                  getAriaValueText={valuetext}
                  onChange={onChange}
                  aria-labelledby="discrete-slider-small-steps"
                  step={1}
                  marks
                  min={minRows}
                  max={maxRows}
                  valueLabelDisplay="auto"
                />

              </ListItem>
              <Divider />
              <ListItem key={'2'} button>
                <ListItemText 
                  primary='Number of columns: ' 
                  secondary={colsNum} 
                />
                <Slider
                  key={`slider-colsNum`} 
                  name="colsNum"
                  defaultValue={rowsNum}
                  getAriaValueText={valuetext}
                  onChange={onChange}
                  aria-labelledby="discrete-slider-small-steps"
                  step={1}
                  marks
                  min={minCols}
                  max={maxCols}
                  valueLabelDisplay="auto"
                />
              </ListItem>
              <Divider />
            </List>
            <Button key="saveSettings" autoFocus color="inherit" type="submit">
              Save
            </Button>
          </FormControl>
        </form>
      </Dialog>
    </div >
  )
}
