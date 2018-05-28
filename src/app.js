import React, { Component } from 'react'
import { Router, browserHistory, Route, Link } from 'react-router'
import Headroom from 'react-headroom'
import { aboutContent } from './content/about'
import { Header } from './components/header'

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
      <div className="page-content">{text}</div>
    </div>
  </div>
)

const Home = props => <Template title="Home" />
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
