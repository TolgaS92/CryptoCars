import React from 'react';
import { Link } from 'react-router-dom';
import {  Typography, Button } from '@material-ui/core';
import './style.css';

function Crypto () {
    return (
        <section className="crypto-box">
            <div className="container">
                <div className="row mt-5 pt-3">
                    <div className="col-sm-6">
                    <Typography align="left">
                        <Button className="btn btn-dark btn-outline-warning px-3" component={Link} to="/search" variant="contained" color="primary">
                            <i className="fab fa-bitcoin fa-4x"></i>
                                Get your car's value in crypto cryptocurrency today!
                        </Button>
                    </Typography>
                    </div>
                    <div className="col-sm-6">
                    <Typography align="left">
                        <Button className="btn btn-dark btn-outline-warning px-3" component={Link} to="/search" variant="contained" color="primary">
                        What is the crypto Market like today? <i className="fas fa-question fa-4x"></i>
                        </Button>
                    </Typography>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Crypto;