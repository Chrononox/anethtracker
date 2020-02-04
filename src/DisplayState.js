import React from 'react';

const DisplayState = ({name, id, pet}) =>{
    return(
        <div>
            <h3>Name: {name}</h3>
            <h3>ID: {id}</h3>
            <h3>Pet: {pet}</h3>
        </div>
    )
}

export default DisplayState;