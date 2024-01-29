import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const styling = makeStyles({
    home: {
        color: '#ffc107',
        textDecoration: 'none',
    },
 
    rightButtonsContainer: {
        display: 'flex',
        alignItems: 'center',
    },
});

const HomeNavbar = () => {
    const styles = styling();
    let id = sessionStorage.getItem("id");

    return (
        <AppBar position="static" color='secondary'>
            <Toolbar variant="dense">
                {/* <Typography variant="h4" color="inherit" component="div">
                    <NavLink to="/" className={styles.home}>LenksKart</NavLink>
                </Typography> */}

                <div className={styles.rightButtonsContainer}>
                    <NavLink to="/user" className="righttButton">
                        Customer Login
                    </NavLink>
                    <NavLink to="/admin" className="lefttButton">
                        Admin Login
                    </NavLink>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default HomeNavbar;
