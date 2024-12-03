import React, { useState } from 'react';
import './LoginSignup.css';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import aadhar_icon from './driving.png';
import password_icon from './padlock.png';

const Login = () => {
    const [action, setAction] = useState("Login"); // State to toggle between Login and Sign Up

    return (
        <div className="inputs">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            {action === "Login" ? (
                <>
                    <div className="input">
                        <img src={aadhar_icon} alt="Aadhar Icon" />
                        <input id="login-aadhar" type="number" placeholder="Aadhar Card Number" />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="Password Icon" />
                        <input id="login-password" type="password" placeholder="Password" />
                    </div>
                    <div className="forgot-password">
                        Lost Password? <span>Click Here</span>
                    </div>
                </>
            ) : (
                <SignUp />
            )}

            <div className="submit-container">
                <Link
                    to="/register"
                    className={action === "Login" ? "submit gray" : "submit"}
                    onClick={() => setAction("Sign Up")}
                >
                    Sign Up
                </Link>
                <Link
                    to="/login"
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={() => setAction("Login")}
                >
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Login;
