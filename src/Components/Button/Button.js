import React from 'react';

const Button = ({ setToArray }) =>{
    return (
        <p className="f6 grow ph3 pv2 mb2 dib white bg-navy pointer" onClick={setToArray}>Submit to Record</p>
    )
}
export default Button;