import React from 'react';
import DataInput from './DataInput'


//this form will gather all of the vital signs of the PT send off to be placed in a array to be printed out

// const Form = ({ resp, setresp }) =>{
// return(
//   <div className=''>
//     {/* <p>Time: <input onChange={setTime} /></p>
//     <p>HR: <input onChange={setHr} /></p> */}
//     <DataInput title={'Resp'} data={resp} setFunc={setresp}/>

//   </div>
// )
// }

class Form extends React.Component{
 

  render(){
    return(
      <div>
        <p>{this.props.test}</p>
      </div>
    )
  }
}


export default Form;