import React from 'react';

export default function NewTask(props){
    return(
        <div>
            <input 
                onChange={e => props.change(e)}
                placeholder="Add Task" type="text" />
            <button onClick={props.click}>Add</button>
        </div>
    )
}