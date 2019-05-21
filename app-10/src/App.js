import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Products from './Routes/Products'
import Details from './Routes/Details'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Products</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Products} />
          <Route path="/details/:id" component={Details} />
        </div>

      </Router>
    );
  }
}

export default App;
