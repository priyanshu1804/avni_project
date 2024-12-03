import React, { useState } from 'react';
import './LoginSignup.css';
import Login from './Login';
import SignUp from './SignUp';
import { Link} from 'react-router-dom';

export const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            {action === "Sign Up" ? <SignUp /> : <Login />}
            <div className="submit-container">
                <Link to="/register"
                    className={action === "Login" ? "submit gray" : "submit"}
                    onClick={() => setAction("Sign Up")}
                >
                    Sign Up
                </Link>
                <Link to="/login"
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={() => setAction("Login")}
                >
                    Login
                </Link>
            </div>
        </div>
    );
};

export default LoginSignup;
