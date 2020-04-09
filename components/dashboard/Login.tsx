import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {signIn} from '../../services/authentication';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import {COOKIES} from '../../services/cookie';


interface Props {
    img: string,
    heading: string,
    text1: string,
    text2: string,
}

const Login: React.FC<Props> = ({img, heading, text1, text2,}) => {
  const [open, setOpen] = useState(false)  
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    //setSubmit(true)
    if (email === '' || password === '') {
      setError(true)
    } else {
      
      const signedInUser = signIn(email, password)
      signedInUser.then( res => {
        console.log('res', res)
        if(res.authentication) {
          //redirect
          setError(false)
          //Cookie.set(COOKIES.name, {'authenticated': true})
          Cookie.set(COOKIES.name, "true")
          router.push('/online')
        } else {
          setError(true)
        }
      })
      
    }
  }


  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e', event.target.value)
    setEmail(event.target.value)

  }

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <div>
        <div className="dashboard-selection" onClick={handleClickOpen}>
            <img src={img} alt={heading}/>
            <h2>{heading}</h2>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Private and Online Voting Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please enter username and password to log in.
          </DialogContentText>
          { error && <p className="red">
              Invalid username or password
              </p>
          }
            <>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Username"
              type="email"
              fullWidth
              onChange={onEmailChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              onChange={onPasswordChange}
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