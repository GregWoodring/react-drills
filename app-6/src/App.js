import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDo from './component/ToDo'

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      userInput: '',
      taskList: []
    }
  }

  handlAddTask = () => {
    let taskList = [...this.state.taskList, this.state.userInput]
    // console.log(taskList)
    this.setState({taskList});
  }

  displayList(){
    let list = this.state.taskList.map((item, index) =>{
      return(<li key={index}>{item}</li>)
    })
    // console.log(list);
    return list;
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <input 
          onChange={e => this.setState({userInput: e.target.value})}
          placeholder="Add Task" type="text" />
        <button onClick={this.handlAddTask}>Add</button>
        <ul>
          {this.displayList()}
        </ul>
      </div>
    );
  }
}

export default App;
