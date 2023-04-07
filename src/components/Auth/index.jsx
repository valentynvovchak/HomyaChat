import React from 'react';
import style from './Auth.module.css'

const Auth = () => {
    return (
        <div className={style.auth}>
            <div className={style.auth_form}>
                <h2 className={style.title}>Welcome to Homyachat!</h2>
                <span>Register to get started!<br/>Socialize with other hamsters!</span>
                <form>
                    <input type="text" placeholder="Enter your email"/>
                    <input type="text" placeholder="Enter your login"/>
                    <input type="text" placeholder="Enter your password"/>
                    <input className={style.submit} type="submit" value="Register"/>
                </form>
            </div>
        </div>
    );
};

export default Auth;