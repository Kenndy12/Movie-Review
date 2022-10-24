import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

import movieReviewLogo from '../../images/MovieReview.png';
const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT'})

        navigate("/");

        setUser(null);
    };

    
    useEffect(() => {
        const token = user?.token;

        //JWT..

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
     

    return (
        <div>
             <AppBar className={classes.appBar} position='static' color='inherit'>
                <div className={classes.brandContainer}>
                    <Typography component={Link} to='/' className={classes.heading} variant='h2' align='center'>Movie Review</Typography>
                    <img className={classes.image} src={movieReviewLogo} alt="Movie Review" height='60'/>
                </div>
                <Toolbar className={classes.toolbar}>
                    {user ? (
                        <div>
                            <Avatar className={classes.purple} alt={user.decoded.given_name} src={user.decoded.picture}>{user.decoded.given_name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.decoded.given_name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>LogOut</Button>
                        </div> 
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                    )}
                </Toolbar>      
            </AppBar>
        </div>
    )
}

export default Navbar