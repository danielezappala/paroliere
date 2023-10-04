import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20
  },

  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));


export default function LoginForm(props) {
  //const [open, setOpen] = React.useState(props.open);
  const [loginFormVisibility, setLoginFormVisibility] = React.useState(null)
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  function onSubmit(e) {
    e.preventDefault();
    console.log(username, password)
  }

  /*
  const handleClose = () => {
    setLoginFormVisibility(false);
    setOpen(false)
  };
  */

  return (
    <div>
      <Dialog 
              fullScreen={fullScreen}
              open={props.open} 
              onClose={props.onClose} 
              aria-labelledby="form-dialog-title">

        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Email Address"
            type="email"
            onChange={(event) => {setUsername(event.target.value)}} //whenever the text field change, you save the value in state
            fullWidth
          />
          <DialogContentText>

          </DialogContentText>
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            onChange={(event) => {setPassword(event.target.value)}} //whenever the text field change, you save the value in state
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" onClick={onSubmit} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
