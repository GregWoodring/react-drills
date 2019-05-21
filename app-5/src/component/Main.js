import React, { Component } from 'react';
import Image from './Image'

export default class Main extends Component{
    constructor(props){
        super(props)

        this.state ={
            imgUrl: 'https://amp.businessinsider.com/images/5c8045a6d2ce7802a110ce92-750-563.jpg'
        }
    }

    render(){
        return(
            <div>
                <Image image={this.state.imgUrl} />
            </div>
        )
    }
}