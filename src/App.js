import React from 'react';
import './App.css';
import DataInput from './DataInput';
import ExportButton from './ExportButton';
import Table from './Table';
import Form from './Form';
import TestZone from './TestZone';

//fill in form, form updates state, when you click button run function to save curr states into form and passes states to show last entered values. 

//TODO: ADD PATIENT INFO AS WELL. as footer, require for document creation

//app loads form. stats are currenty in form

class App extends React.Component{
  constructor(){
    super();
    this.state = {
     test: 'X.X',
    }
  }

  pushToStats = (event) =>{
    //get array from form and push to this array.
  }

  //add data to form after button click

  //build the form
 


  

  render(){
    return(
      <div>
        <Form />
       </div>
    )
  }
}

export default App;
