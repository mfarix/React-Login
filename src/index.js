import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import './stylesheets/bootstrap.css'
import './stylesheets/style.css'
import './stylesheets/style-responsive.css'

import {App} from "./components/App"
import {Oops404} from './components/Oops404'

Window.React = React;

render(
    <Router history={hashHistory}>
        <Route exact path="/" component={App}/>
        <Route path="login" component={App}/>
        <Route path="register" component={App}/>
        <Route path="*" component={Oops404}/>
    </Router>,
    document.getElementById('container'));