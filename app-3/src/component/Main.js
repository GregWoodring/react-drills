import React, {Component} from 'react';

export default class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            arr: ['Bob', 'BillBob', 'Billy', 'Bilbo Baggins', 'George'],
            newArr: ['Bob', 'BillBob', 'Billy', 'Bilbo Baggins', 'George'],
            filter: ''
        }
    }

    handleFilter = () => {
        if(this.state.filter){
            let newArr = this.state.arr.filter((item) => item.includes(this.state.filter))
            this.setState({
                newArr
            })
        } else {
            this.setState({
                newArr: this.state.arr
            })
        }
        
    }

    render(){
        return(
            <div>
                {this.state.newArr.map((item, index) => {
                    return <h1 key={index}>{item}</h1>
                })}
                <input 
                    onChange={e => this.setState({filter: e.target.value})}
                    type="text" 
                    placeholder="type to filter" />
                <button
                    onClick={this.handleFilter}>
                    Filter
                </button>
            </div>
        )
    }
}