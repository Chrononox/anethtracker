import React from 'react';

//this form will gather all of the vital signs of the PT send off to be placed in a array to be printed out

const Form = ({ time, setTime, hr, setHr  }) =>{
return(
  <div className=''>
    <p>Time: <input onChange={setTime} /></p>
    <p>HR: <input onChange={setHr} /></p>
  </div>
)
}
export default Form;