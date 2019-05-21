import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Home(){
  return <h1>Home</h1>
}

function About(){
  return <h1>About</h1>
}

function Users(){
  return <h1>Users</h1>
}
 
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    );
  }
}

export default App;
