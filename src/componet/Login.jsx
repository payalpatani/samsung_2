import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase';


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function Login() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleRegister() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((data) => {
                console.log(data);
                alert("Registration Success");
            })
            .catch((error) => {
                console.error(error);
                alert("Error: " + error.message);
            });
    }

    function handleGoogleSignIn() {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log("User signed in:", user);
            })
            .catch((error) => {
                alert("Error: " + error.message);
            });
    }

    return (
        <div className="login-container">
            <h1 className="title">Login</h1>
            <input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input-field"
                required
            />
            <input
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input-field"
                required 
            />
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required 
            />
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required 
            />
            <button onClick={handleRegister} className="submit-button">Submit</button>
            <hr className="divider" />
            <button onClick={handleGoogleSignIn} className="google-button">Sign in with Google</button>
        </div>
    );
}
