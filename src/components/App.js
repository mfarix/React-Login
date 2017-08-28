import React from 'react'
import {Component} from 'react'

import {Menu} from "./Menu"
import {UserList} from "./UserList"
import {AddUserForm} from "./AddUserForm";
import {LoginUserForm} from "./LoginUserForm";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [
                {
                    username: "mohdfariz",
                    password: "technoradar",
                },
                {
                    username: "andrew",
                    password: "jackson",
                }
            ]
        };
        this.addUser = this.addUser.bind(this);
    }

    addUser(newUser) {
        this.setState({
            allUsers: [
                // Take all the existing users  and push to new object
                ...this.state.allUsers,
                newUser
            ]
        })
    }

    render() {
        return (
            <div className="app">
                <Menu/>
                <section id="main-content">
                    <section className="wrapper">
                        <div className="row">
                            {(this.props.location.pathname === "/") ?
                                <UserList users={this.state.allUsers}/> :
                                (this.props.location.pathname === "/register") ?
                                    <AddUserForm onNewUser={this.addUser}/> :
                                    <LoginUserForm users={this.state.allUsers}/>
                            }
                        </div>
                    </section>
                </section>
            </div>
        )
    }
}