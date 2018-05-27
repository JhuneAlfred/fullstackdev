import React, { Component } from 'react'
import { Router, browserHistory, Route, Link } from 'react-router'
import Headroom from 'react-headroom'
import './app.css'

const NavBar = () => (
  <div className="navbar">
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/about">About</Link>
  </div>
)

const Template = ({ title, text }) => (
  <div>
    <Headroom>
      <div>Full StacK Dev</div>
    </Headroom>
    <NavBar />
    <p className="page-info" style={{ height: '1115px' }}>
      {title}
      <p className="page-content">{text}</p>
    </p>
  </div>
)

const Home = props => <Template title="Home" />
const Profile = props => <Template title="Profile" />
const About = props => <Template title="About" text={about} />

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

const about =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

export default App
