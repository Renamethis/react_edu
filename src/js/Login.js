import React, { useCallback, useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "./auth";
import "../css/login.css"
import app from './firebase.js'
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";
export const Login = ({history}) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email.value, password.value).then((user) => setCurrentUser(user.user));
            history.push("/")
        } catch(error) {
            alert(error);
        }
    }, [history]);
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    if(currentUser) {
        return <Redirect to="/" />;
    }
    return (
        <div className="window">
            <p className="icon">GETHUB</p>
            <div className="login_box">
                <h1>Sign Up</h1>
                <form onSubmit={handleLogin}>
                    <label>Email</label>
                    <input name="email" type="email" placeholder="email"/>
                    <label>Password</label>
                    <input name="password" type="password" placeholder="Password"/>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}