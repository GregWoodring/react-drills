import React, { Component } from 'react';

export default class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            userInput: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>User Input: {this.state.userInput}</h1>
                <input onChange={this.handleInput} placeholder="input" type="text"/>
            </div>
        )
    }
}