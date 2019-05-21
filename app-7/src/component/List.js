import React from 'react';

export default function List(props){
    
    let displayList = props.list.map((item, index) =>{
        return(<li key={index}>{item}</li>)
        })
        // console.log(list);
        

    return(
        <ul>
            {displayList}
        </ul>
    )

}