import React, { Component } from 'react';

export default class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    render(){
        return(
            <div>
                <input 
                    onChange={e => this.setState({username: e.target.value})}
                    placeholder="username" 
                    type="text" />
                <input 
                    onChange={e => this.setState({password: e.target.value})}
                    placeholder="password" 
                    type="text" />
                <button onClick={() => alert(`Username: ${this.state.username}
Password: ${this.state.password}`)}>Login</button>
            </div>
        )
    }
}