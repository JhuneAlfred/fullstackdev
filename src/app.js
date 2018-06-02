import React, { Component } from 'react'
import { Router, browserHistory, Route, Link } from 'react-router'
import Headroom from 'react-headroom'
import { aboutContent } from './content/about'
import { homeContent } from './content/home'
import { Header } from './components/header'
import { currentDomain } from './components/helper'

import './stylesheets/app.css'

const NavBar = () => (
  <div className="navbar">
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/about">About</Link>
  </div>
)

const Template = ({ title, text }) => (
  <div>
    <Header />
    <NavBar />
    <div className="page-info" style={{ height: '100%' }}>
      {title}
      <p>
        <div className="page-content">{text}</div>
      </p>
    </div>
  </div>
)

const Home = props => <Template title="Home" text={homeContent} />
const Profile = props => <Template title="Profile" />
const About = props => <Template title="About" text={aboutContent} />

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
      </Router>
    )
  }
}

export default App
