import React, { useState } from 'react';
import './LoginSignup.css';
import axios from 'axios';

import { Link } from 'react-router-dom';
import user_icon from './user.png';
import email_icon from './email.png';
import password_icon from './padlock.png';
import mobile_icon from './phone-call.png';
import address_icon from './maps-and-flags.png';
import aadhar_icon from './driving.png';
import age_icon from './age.png';

const SignUp = () => {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await axios.post('http://localhost:3006/user/signup', {
                name,
                age,
                email,
                phone,
                address,
                aadhar,
                password,
                role
            });
            console.log('Data sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };
    

    return (
        <div className="inputs">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="input">
                <img src={user_icon} alt="User Icon" />
                <input id="name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input">
                <img src={age_icon} alt="Age Icon" />
                <input id="age" type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="input">
                <img src={email_icon} alt="Email Icon" />
                <input id="email" type="email" placeholder="Email Id" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input">
                <img src={mobile_icon} alt="Phone Icon" />
                <input id="phone" type="number" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="input">
                <img src={address_icon} alt="Address Icon" />
                <input id="address" type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="input">
                <img src={aadhar_icon} alt="Aadhar Icon" />
                <input id="aadhar" type="number" placeholder="Aadhar Card Number" onChange={(e) => setAadhar(e.target.value)} />
            </div>
            <div className="input">
                <img src={password_icon} alt="Password Icon" />
                <input id="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input role-selection">
                <label>
                    <input type="radio" name="role" value="Voter" checked={role === "Voter"} onChange={(e) => setRole(e.target.value)} />
                    Voter
                </label>
                <label>
                    <input type="radio" name="role" value="Admin" checked={role === "Admin"} onChange={(e) => setRole(e.target.value)} />
                    Admin
                </label>
            </div>
            <button className="submit" onClick={handleSubmit}>
                Submit
            </button>

            <div className="submit-container">
                <Link to="/register" className="submit">
                    Sign Up
                </Link>
                <Link to="/login" className="submit">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default SignUp;
