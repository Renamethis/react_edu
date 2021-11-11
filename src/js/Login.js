import React, { useCallback, useContext } from "react";
import { Redirect} from "react-router";
import {Link} from "react-router-dom";
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
                        <button className="form__btn" type="submit">Sign In</button>
                    </div>
                </form>
            </div>
            <div className="signup">

            </div>
        </div>
    );
}
