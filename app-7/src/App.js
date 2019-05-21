import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDo from './component/ToDo'
import NewTask from './component/NewTask'
import List from './component/List'

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

  handleChangeInput = e =>{
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <NewTask 
          change={this.handleChangeInput}
          click={this.handlAddTask} />
        <List list={this.state.taskList} />
      </div>
    );
  }
}

export default App;
