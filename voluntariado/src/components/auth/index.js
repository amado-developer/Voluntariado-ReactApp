import React from 'react';
import AuthForm from './authForm'; 
import '../../styles/auth.css'
import logo from '../../images/white_logo.png'
const auth = () => (
    <div>
        <div className="container">
            <div className="auth_header">
                <h1 className="title"> 
                    HORAS DE EXTENSIÓN
                </h1>
                <img src={logo} alt="logo" className="logo"></img>
            </div>
            <AuthForm />
        </div>

    </div>
);
export default auth;