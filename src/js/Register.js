import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from './firebase.js'
export const Register = ({history}) => {
    const handleRegister = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
        } catch(error) {
            alert(error);
        }
    }, [history]);
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleRegister}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="email"/>
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password"/>
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}