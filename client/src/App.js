import React from 'react';
import {Container} from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => (
    <GoogleOAuthProvider clientId="194099583897-oeqfqh4p9cqctirt2q9j5v0bjgp2ehq9.apps.googleusercontent.com">
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/auth" exact element={<Auth/>}/> 
                </Routes>
            </Container>    
        </BrowserRouter>
    </GoogleOAuthProvider> 
)

export default App;
