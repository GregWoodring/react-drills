import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Products extends Component{
    constructor(props){
        super(props);

        this.state = {
            list: []
        }
    }

    componentWillMount(){
        axios.get('https://swapi.co/api/people').then(res =>{
            let list = res.data.results;
            this.setState({list})
        })
    }

    renderLists(){
        return this.state.list.map((item, index) => {
            return <Link 
                key={index}
                style={{display:'block'}}
                to={`/Details/${index + 1}`}>{item.name}</Link>
        });
    }

    render(){
        return(
            <div>
                <h1>Characters</h1>
                <ul>
                    {this.renderLists()}
                </ul>
            </div>
        )
    }
}