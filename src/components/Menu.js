import React from 'react'
import {Link} from 'react-router'
import HomeIcon from 'react-icons/lib/fa/home'
import RegisterIcon from 'react-icons/lib/fa/user-plus'
import LoginIcon from 'react-icons/lib/fa/sign-in'

export const Menu = () =>
    <header className="header black-bg">
        <div className="top-menu">
            <ul className="nav pull-left top-menu">
                <li><Link className="logout" to="/" activeClassName="selected"><HomeIcon/></Link></li>
            </ul>

            <ul className="nav pull-right top-menu">
                <li><Link className="logout" to="/list-users" activeClassName="selected"><LoginIcon/> Login</Link></li>
                <li><Link className="logout" to="/add-user" activeClassName="selected"><RegisterIcon/> Register</Link></li>
            </ul>
        </div>
    </header>;