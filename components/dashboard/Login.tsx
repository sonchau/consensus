import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


interface Props {
    img: string,
    heading: string,
    text1: string,
    text2: string,
}
const Login: React.FC<Props> = ({img, heading, text1, text2,}) => {
  const [open, setOpen] = useState(false);
  //const [submit, setSubmit] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    //setSubmit(true)
  }

  return (
    <div>
        <div className="dashboard-selection" onClick={handleClickOpen}>
              <a>
                  <img src={img} alt={heading}/>
                  <h2>{heading}</h2>
                  <p>{text1}</p>
                  <p>{text2}</p>
              </a>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Private and Online Voting Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please enter username and password to log in.
          </DialogContentText>
          
            <>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Username"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="email"
              fullWidth
            />
            </>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Login
          </Button>
  
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login;