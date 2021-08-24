import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import {  Typography, Button } from '@material-ui/core';
import './style.css';
import Crypto from '../components/Crypto'
// import Signup from '../components/Signup';
import UserStory from '../components/UserStory';
import decode from 'jwt-decode';


function Main () {
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    useEffect(() => {
        const token = user?.token;
        /*  JWT */
        if(token) {
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime());
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    return(
        <div>
        <section className="main-top grid lg:grid-cols-2 md:grid-cols-2 gap-4 grid-cols-1">
                { user ? (
                    <div className="container">
                    <h1 className="text-warning" >
                        Get Your Car Value in Crypto
                    </h1>
                    <h2 className="text-warning">
                        By using your VIN number!
                    </h2>
                    <Typography align="left">
                            <Button className="btn btn-dark btn-outline-warning px-3" component={Link} to="/search" variant="contained" color="primary">Check Value</Button>
                    </Typography>
                    </div>
                    ) : (
                        <div className="container">
                            <h2 className="text-warning">Create an account or Login to save your search history</h2>
                            <Typography align="left">
                            <Button className="btn btn-dark btn-outline-warning px-3" component={Link} to="/auth" variant="contained" color="primary">Log In</Button>
                            </Typography>
                        </div>
                )}           
        </section>
        <UserStory />
        <Crypto />
        </div>
    )
}

export default Main;