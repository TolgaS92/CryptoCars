import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

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

const SignIn = () => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const [signInSuccess, setSignInSuccess] = useState();
  const [signInError, setSignInError] = useState();
  const [redirectOnSignIn, setRedirectOnSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [remember, setRemember] = useState(false);

  const submitCredentials = async (credentials) => {
    try {
      const url = "http://localhost:3001/api/auth";
      const fetchResponse = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(credentials), // body data type must match "Content-Type" header
      });
      const data = await fetchResponse.json();
      authContext.setAuthState(data);
      setSignInSuccess(data.message);
      setSignInError(null);

      setTimeout(() => {
        setRedirectOnSignIn(true);
      }, 700);
    } catch (error) {
      setSignInError(error.message);
      setSignInSuccess(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    submitCredentials({ email, password });
  };

  return (
    <>
      {redirectOnSignIn && <Redirect to="/search" />}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <StyledPaper variant="elevation">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {signInSuccess && <h1>success</h1>}
          {signInError && <h1>Error: {signInError} </h1>}
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={(e) => setEmail(e.target.value.trim())}
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
              id="password"
              onChange={(e) => setPassword(e.target.value.trim())}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value={remember} color="primary" onChange={(e) => setRemember(e.target.checked)} />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs={12}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </StyledPaper>
      </Container>
    </>
  );
};

export default SignIn;