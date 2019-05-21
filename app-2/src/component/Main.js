import React, {Component} from 'react';

export default class Main extends Component{
    constructor(props){
        super(props);

        this.state ={
            arr: ['Hello', 'Im', 'in', 'a', 'list']
        }
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.arr.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}