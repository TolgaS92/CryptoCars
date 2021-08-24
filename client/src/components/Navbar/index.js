import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Toolbar, AppBar, Typography, Avatar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useStyles from './style';

function Navbar () {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
        /*  JWT */
        if(token) {
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography className={classes.heading} align="left">
                    <Button component={Link} to="/" color="secondary">CryptoCars</Button>
                </Typography>
            </div>
            <div>
            </div>
            <Toolbar 
            className={classes.toolbar}>
            { user ? (
                <div className={classes.profile}>
                <Typography className={classes.heading} align="left">
                    <Button className={classes.button} component={Link} to="/search">Search</Button>
                </Typography>
                <Typography className={classes.heading} align="left">
                    <Button className={classes.button} component={Link} to="/saved">Saved</Button>
                </Typography>
                <Typography className={classes.heading} align="left">
                    <Button className={classes.button} component={Link} to="/about">About</Button>
                </Typography>
                <Typography className={classes.heading} align="left">
                    <Button onClick={logout} color="secondary">Logout</Button>
                </Typography>
                <div className={classes.loggedIn}>
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                </div>
                </div>
                ) : (
                    <Button className={classes.signIn} component={Link} to="/auth" variant="contained" color="primary">Login</Button>
                    )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;