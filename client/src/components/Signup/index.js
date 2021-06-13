import React, { useState } from 'react';
import Userapi from '../../utils/user';
import { Redirect } from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const StyledPaper = withStyles({
  root: {
    marginTop: 16,
    padding: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})(Paper);

function Signup () {
const classes = useStyles();
const [userObject, setUserObject] = useState({})
const [signUpSuccess, setSignUpSuccess] = useState();
const [signUpError, setSignUpError] = useState();
const [redirectOnSignUp, setRedirectOnSignUp] = useState(false);


function handleInputChange(event) {
    const { name, value } = event.target;
    setUserObject({...userObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (userObject.name && userObject.email && userObject.password) {
      Userapi.saveUser({
        name: userObject.name,
        email: userObject.email,
        password: userObject.password
      })
        .then(res => {
          alert("Thanks for signing up!")
          setSignUpSuccess("succes");
          setSignUpError(null);

          setTimeout(() => {
            setRedirectOnSignUp(true);
          }, 700);
        })
        .catch(err => {
          console.log(err)
          setSignUpError(err.message);
          setSignUpSuccess(null);
        });
    }
  };


    return(
        <>
        {redirectOnSignUp && <Redirect to="/search" />}
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <StyledPaper variant="elevation">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {signUpSuccess && <h1>success</h1>}
          {signUpError && <h1>Error: {signUpError} </h1>}
          <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              onChange={handleInputChange}
              autoComplete="name"
              autoFocus
            />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              onChange={handleInputChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={handleInputChange}
              autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign Up
            </Button>
          </form>
          </StyledPaper>
        </Container>
        </>
    )
}


export default Signup;