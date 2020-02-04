import React from 'react';

//get user input here and return it

const State = ({returnedData}) =>{
    return(
        <div>
            <input onChange={returnedData} placeholder='enter name'/>
            <input placeholder='enter id' />
        </div>
    )
}

export default State;