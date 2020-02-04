import React from 'react';
import './App.css';
import DataInput from './DataInput';
import ExportButton from './ExportButton';

//fill in form, form updates state, when you click button run function to save curr states into form and passes states to show last entered values. 

//TODO: ADD PATIENT INFO AS WELL. as footer, require for document creation

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      temp: '00.0',
      pulse: '00',
      resp: '00',
      data1: '-',
      data2: '-',
      data3: '-',
      data4: '-',
      data5: '-',
      data6: '-',
      data7: '-',
    }
  }

  //add data to form after button click
  addToForm = (event) =>{
    console.log('data is pushed to the form');
    //build a html page with the data
  }

  //build the form
  buildForm = (event) =>{
    console.log('this is where the form is turned into a PDF or TXT file')
    console.log('^.^')
  }

///Data State Setters. There will be a few of these till i know better
  setTemp = (event) => this.setState({temp: event.target.value});
  setPulse = (event) => this.setState({pulse: event.target.value});
  setResp = (event) => this.setState({resp: event.target.value});
  setData1 = (event) => this.setState({Data1: event.target.value});
  setData2 = (event) => this.setState({Data2: event.target.value});
  setData3 = (event) => this.setState({Data3: event.target.value});
  setData4 = (event) => this.setState({Data4: event.target.value});
  setData5 = (event) => this.setState({Data5: event.target.value});
  setData6 = (event) => this.setState({Data6: event.target.value});
  setData7 = (event) => this.setState({Data7: event.target.value});
  

  render(){
    return(
      <div>
        <div className='inputs'>
          <DataInput title={'Temp:'} data={this.state.temp} setFunc={this.setTemp} />
          <DataInput title={'Pulse:'} data={this.state.pulse} setFunc={this.setPulse} />
          <DataInput title={'Resp:'} data={this.state.resp} setFunc={this.setResp} />
          <DataInput title={'Data:'} data={this.state.data} setFunc={this.setData1} />
          <DataInput title={'Data:'} data={this.state.data} setFunc={this.setData2} />
          <DataInput title={'Data:'} data={this.state.data} setFunc={this.setData3} />
          <DataInput title={'Data:'} data={this.state.data} setFunc={this.setData4} />
          <DataInput title={'Data:'} data={this.state.data} setFunc={this.setData5} />
          <DataInput title={'Data:'} data={this.state.data} setFunc={this.setData6} />
          <DataInput title={'Data:'} data={this.state.data} setFunc={this.setData7} />
        </div>
        <div className='btns'>
          <ExportButton btnName={'Add to form'} setFunc={this.addToForm}/>
          <ExportButton btnName={'Build Form'} setFunc={this.buildForm}/>
        </div>
      

      </div>
      
    )
  }
}

export default App;
