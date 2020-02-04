import React from 'react';
import './App.css';
import DataInput from './DataInput';
import ExportButton from './ExportButton';

//fill in form, form updates state, when you click button run function to save curr states into form and passes states to show last entered values. 

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      temp: '00.0',
      pulse: '00',
      resp: '',
      data1: '',
      data2: '',
      data3: '',
      data4: '',
      data5: '',
      data6: '',
      data7: '',
      data8: '',
      data9: '',
      data10: '',
    }
  }

  //add data to form after button click
  addToForm = (event) =>{
    console.log('data is pushed to the form');
  }

  //build the form
  buildForm = (event) =>{
    console.log('this is where the form is turned into a PDF or TXT file')
    console.log('^.^')
  }
///Data State Setters. There will be a few of these till i know better
 setTemp = (event) =>{
   console.log('set temp to ', event.target.value)
 }

 

  render(){
    return(
      <div>
        <DataInput title={'Temp:'} data={this.state.temp} setFunc={this.setTemp} />
        <ExportButton btnName={'Add to form'} setFunc={this.addToForm}/>
        <ExportButton btnName={'Build Form'} setFunc={this.buildForm}/>
      </div>
    )
  }
}

export default App;
