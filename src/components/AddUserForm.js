import React from 'react'
import {Component, PropTypes} from 'react'

export const AddUserForm = ({username, password, onNewUser}) => {
    let _username, _password;

    const submit = (e) => {
        e.preventDefault();

        // Check submitted values
        console.log('username', _username.value);
        console.log('password', _password.value);

        // Create new User
        onNewUser({
            username: _username.value,
            password: _password.value
        });

        // Reset form after submit
        _username.value = '';
        _password.value = '';
    };

    return (
        <form onSubmit={submit} className="form-login">
            <h2 className="form-login-heading">Register</h2>
            <div className="login-wrap">
                <label htmlFor="username">Username</label>
                <input className="form-control" id="username" type="username" defaultValue={username}
                       ref={input => _username = input} required/>
                <label htmlFor="password">Password</label>
                <input className="form-control" id="password" type="password" defaultValue={password}
                       ref={input => _password = input} required/>
                <br/>
                <div className="centered">
                    <button className="btn btn-theme">Register</button>
                </div>
            </div>
        </form>
    )
};

AddUserForm.defaultProps = {
    username: "UserName",
    password: "P@ssW0rd"
};

AddUserForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};