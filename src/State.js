import React from 'react';

//get user input here and return it

const State = ({dataNeed, userInfo }) =>{
    return(
        <div>
            <p>{dataNeed}:
            <input 
            onChange={userInfo}
            /></p>
        </div>
    )
}

export default State;