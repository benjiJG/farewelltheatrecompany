import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import posed from 'react-pose';

import './index.css';
import logo from './images/ftc_logo_new.png';

import App from './App';
import About from './pages/about';
import MeetTheTeam from './pages/meettheteam';
import Productions from './pages/productions';
import FAQ from './pages/faq';

import * as serviceWorker from './serviceWorker';

const NavLink = posed.li({
  hoverable: true,
  pressable: true,

  init: {
    y: 0,
    scale: 1,
    backgroundColor: 'rgba(193, 193, 193, 0)'
  },

  hover: {
    y: 10,
    color: '#fff',
    backgroundColor: 'rgba(193, 193, 193, 1)',
  },

  press: {
    scale: 1.2,
    backgroundColor: 'rgba(193, 193, 193, 1)'
  }
});

const routing = (
  <Router>
    <div className='app'>
      <ul className="nav">
        <li><img src={logo}></img></li>
        <NavLink className='navlink'><a href='#'>Home</a></NavLink>
        <NavLink className='navlink'><a href='#'>About</a></NavLink>
        <NavLink className='navlink'><a href='#'>Meet The Team</a></NavLink>
        <NavLink className='navlink'><a href='#'>Productions</a></NavLink>
        <NavLink className='navlink'><a href='#'>FAQ</a></NavLink>
      </ul>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/about' component={About} />
        <Route exact path='/meettheteam' component={MeetTheTeam} />
        <Route exact path='/productions' component={Productions} />
        <Route exact path='./faq' component={FAQ} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
