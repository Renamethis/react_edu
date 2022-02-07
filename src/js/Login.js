import React, { useCallback, useContext, useState} from "react";
import { Redirect} from "react-router";
import {Link, useLocation} from "react-router-dom";
import { AuthContext } from "./auth";
import "../css/sign.css"
const axios = require('axios')
export const Login = ({history}) => {
    const [label, setLabel] = useState("")
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        };    
        var { email, password } = event.target.elements;
        email = email.value
        password = password.value
        axios.post(`${process.env.REACT_APP_API_URL}/auth/login/`, { email, password }, {headers})
            .then((response) => {
                history.push("/main")
            }).catch((err) => {
                setLabel(err.response.data.detail.toString())
            });
    }, [history]);
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    if(currentUser) {
        return <Redirect to="/main" />;
    }
    return (
        <div className="window">
            <p className="icon_login">GETHUB</p>
            <h2>Sign In</h2>
            <div className="login_box">
                <form onSubmit={handleLogin}>
                    <div className="form">
                        <label className="form__label">Email-address</label>
                        <input className="input_style" name="email" type="email" placeholder="Email"/>
                        <label className="form__label">Password
                            <Link className="link" to="/forgot?user_email={email.value}">Forgot password?</Link>
                        </label>
                        <input className="input_style" name="password" type="password" placeholder="Password"/>
                        <label className="error">{label}</label>
                        <button className="form__btn" type="submit">Sign In</button>
                    </div>
                </form>
            </div>
            <div className="signup">

            </div>
        </div>
    );
}
