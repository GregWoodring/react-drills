import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: []
    }
  }

  componentWillMount(){
    axios.get('https://swapi.co/api/people').then(res =>{
      let characters = res.data.results
      this.setState({
        characters
      })
    })


  }

  renderList(){
    return this.state.characters.map((item, index) => {
      return <li key={index}>{item.name}</li>
    })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default App;
