import React, { useCallback, useContext, useState} from "react";
import {Redirect} from "react-router";
import { AuthContext } from "./auth";
import "../css/sign.css"
const axios = require('axios')
export const Register = ({history}) => {
    const [label, setLabel] = useState("")
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        };    
        var { email, username, password } = event.target.elements;
        email = email.value.toString()
        username = username.value.toString()
        password = password.value.toString()
        axios.post(`${process.env.REACT_APP_API_URL}/auth/register/`, { username: username, 
            email: email, password: password}, {headers})
            .then((response) => {
                history.push("/main")
            }).catch((err) => {
                if(err.response.data.password != undefined) {
                    setLabel(err.response.data.password.toString()) 
                }
            });
    }, [history]);
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    if(currentUser) {
        return <Redirect to="/main" />;
    }
    return (
        <div className="window">
            <p className="icon_login">GETHUB</p>
            <h2>Sign Up</h2>
            <div className="login_box">
                <form onSubmit={handleLogin}>
                    <div className="form">
                        <label className="form__label">Email-address</label>
                        <input className="input_style" name="email" type="email" placeholder="Email"/>
                        <label className="form__label">Username</label>
                        <input className="input_style" name="username" type="username" placeholder="Username"/>
                        <label className="form__label">Password</label>
                        <input className="input_style" name="password" type="password" placeholder="Password"/>
                        <label className="error">{label}</label>
                        <button className="form__btn" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
            <div className="signup">
            </div>
        </div>
    );
}
