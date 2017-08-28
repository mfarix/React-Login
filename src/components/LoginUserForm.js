import React from 'react'
import {Component, PropTypes} from 'react'

export const LoginUserForm = ({username, password}) => {
    let _username, _password;

    const submit = (e) => {
        e.preventDefault();

        // Check submitted values
        console.log('username', _username.value);
        console.log('password', _password.value);

        // TODO: User Authentication
    };

    return (
        <form onSubmit={submit} className="form-login">
            <h2 className="form-login-heading">Login</h2>
            <div className="login-wrap">
                <label htmlFor="username">Username</label>
                <input className="form-control" id="username" type="username" defaultValue={username}
                       ref={input => _username = input} required/>
                <label htmlFor="password">Password</label>
                <input className="form-control" id="password" type="password" defaultValue={password}
                       ref={input => _password = input} required/>
                <br/>
                <div className="centered">
                    <button className="btn btn-theme">Login</button>
                </div>
            </div>
        </form>
    )
};

LoginUserForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string
};