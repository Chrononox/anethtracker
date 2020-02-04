import React from 'react';
import './App.css';
import DataInput from './DataInput';

//fill in form, form updates state, when you click button run function to save curr states into form and passes states to show last entered values. 
//make json file fo
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

 setTemp = (event) =>{
   console.log('set temp to ', event.target.value)
 }

  render(){
    return(
      <div>
        <DataInput title={'Temp:'} data={this.state.temp} setFunc={this.setTemp} />
        <DataInput title={'Pulse:'} data={this.state.pulse} setFunc={this.setTemp} />
      </div>
    )
  }
}

export default App;
