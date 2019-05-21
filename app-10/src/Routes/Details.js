import React, {Component} from 'react';
import axios from 'axios';

export default class Details extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            height: '',
            mass: '',
            hair_color: '',
            skin_color: '',
            eye_color: '',
            birth_year: '',
            gender: ''
        }
    }

    componentWillMount(){
        axios.get(`https://swapi.co/api/people/${this.props.match.params.id}`).then(res =>{
            console.log(res)

            let {name, 
                height, 
                mass, 
                hair_color, 
                skin_color, 
                eye_color,
                birth_year,
                gender} = res.data;

            this.setState({name, 
                height, 
                mass, 
                hair_color, 
                skin_color, 
                eye_color,
                birth_year,
                gender});
        })
    }

    render(){
        return(
            <div>
                <ul>
                    <li>name: {this.state.name}</li>
                    <li>mass: {this.state.mass}</li>
                    <li>hair color: {this.state.hair_color}</li>
                    <li>skin color: {this.state.skin_color}</li>
                    <li>eye color: {this.state.eye_color}</li>
                    <li>birth year: {this.state.birth_year}</li>
                    <li>gender: {this.state.gender}</li>
                </ul>
            </div>
        )
    }
}