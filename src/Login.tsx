import React, { useState } from "react";
import NavBar from "./NavBar";
import './index.css'
import "./home.scss";

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [submitted, setSubmitted] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [isEmail, setIsEmail] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [isPassword, setIsPassword] = useState(false);

    const handleClick = async (e: any) => {
        e.preventDefault();
        setSubmitted(true);
        try {
            const response = await fetch('http://localhost:3001', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: emailInput,
                    password: passwordInput,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setLoggedIn(true);
            } else {
                setIsEmail(false);
                setIsPassword(false);
                setSubmitted(true);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }

    }

    const handleEmailInput = (e: any) => {
        setEmailInput(e.target.value);
    }

    const handlePasswordInput = (e: any) => {
        setPasswordInput(e.target.value);
    }

    return (
        <div>
            <NavBar />
            {!loggedIn ?
                <section className="login">
                    <h1>Welcome back!</h1>
                    <p>Log in to your account to continue</p>
                    <form action="">
                        <div className="email">
                            <div>
                                <img src="src/assets/email.png" alt="" />
                            </div>
                            <input type="email" name="email" id="email" placeholder="maxmustermann@gmail.com" onChange={handleEmailInput} value={emailInput} style={{ border: (submitted && !isEmail) ? '1px solid red' : (submitted && isEmail) ? '1px solid green' : '' }} />
                        </div>

                        <div className="password">
                            <div>
                                <img src="src/assets/password.png" alt="" />
                            </div>
                            <input type="password" name="password" id="password" placeholder="passwort123" onChange={handlePasswordInput} value={passwordInput} style={{ border: (submitted && !isPassword) ? '1px solid red' : (submitted && isPassword) ? '1px solid green' : '' }} />
                        </div>

                        <button onClick={handleClick} type="button">Log In</button>
                        {submitted && !isEmail ? <span style={{ display: "block", marginTop: 10 }}>Invalid email!</span> : ''}
                        {submitted && !isPassword ? <span style={{ display: "block", marginTop: 10 }}>Invalid password!</span> : ''}
                    </form>

                    <div className="line"></div>

                    <div className="otherOpportunities">
                        <button>
                            <img src="src/assets/google.png" alt="" />
                            <p>Google</p>
                        </button>
                        <button>
                            <img src="src/assets/facebook.png" alt="" />
                            <p>Facebook</p>
                        </button>
                    </div>
                </section> : location.href = "/account"}
        </div>
    );
}

export default Login;