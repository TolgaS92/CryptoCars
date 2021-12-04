import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Typography, Avatar, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Logo from "./logo/CryptoCars.PNG";
import decode from "jwt-decode";
import useStyles from "./style";

function Navbar() {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    /*  JWT */
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-dark">
        <div className="navbar-brand">
          <Button component={Link} to="/">
            <img className={classes.logo} alt="sign" src={Logo} />
          </Button>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ml-auto justify-content-end"
          id="navbarCollapse"
        >
          {user ? (
            <>
              <ul className="navbar-nav ml-auto flex-row ms-md-auto float-right">
                <li className="nav-item" align="left">
                  <Button className={classes.button} component={Link} to="/">
                    Home
                  </Button>
                </li>
                <li className="nav-item" align="left">
                  <Button
                    className={classes.button}
                    component={Link}
                    to="/search"
                  >
                    Search
                  </Button>
                </li>
                <li className="nav-item" align="left">
                  <Button
                    className={classes.button}
                    component={Link}
                    to="/saved"
                  >
                    My Cars
                  </Button>
                </li>
                <li className="nav-item" align="left">
                  <Button onClick={logout} color="secondary">
                    Logout
                  </Button>
                </li>
              </ul>
              <hr className="d-md-none text-white"></hr>
              <div className="d-flex ml-auto flex-row ms-md-auto">
                <Avatar
                  className={classes.purple}
                  alt={user.result.name}
                  src={user.result.imageUrl}
                >
                  {user.result.name.charAt(0)}
                </Avatar>
                <Typography className={classes.userName} variant="h6">
                  {user.result.name}
                </Typography>
              </div>
            </>
          ) : (
            <Button
              className={classes.signIn}
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
