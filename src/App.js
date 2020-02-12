import React from 'react';
import './App.css';
import Form from './Components/Form/Form';

//TODO

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      time: '',
      hr: '',
      resp: '',
      temp: '',
      spo2: '',
      co2: '',
      bp: '',
      iso: '',
      ivf: '',
      ekg: '',
      test: 'O.O',
    }
  }

  //set the time when button is clicked  use =new Date() https://tecadmin.net/get-current-date-time-javascript/
  setTime(event){
    this.setState({time: 'time value'})
    console.log('in time')
  }

  ///Data State Setters.  
 hr(event){
    console.log('in HR')
  }

  // setHr =   (event) => this.setState({hr: event.target.value})
  setresp = (event) => this.setState({resp: event.target.value});
  setTemp = (event) => this.setState({temp: event.target.value});
  setspo2 = (event) => this.setState({spo2: event.target.value});
  setco2 =  (event) => this.setState({co2: event.target.value});
  setbp =   (event) => this.setState({bp: event.target.value});
  setiso =  (event) => this.setState({iso: event.target.value});
  setivf =  (event) => this.setState({ivf: event.target.value});
  setekg =  (event) => this.setState({ekg: event.target.value});

 

  render(){
    
    return(
      <div>
        <div className='ptinfo'>

        </div>
        <div className='table'>
          
        </div>
        <div className='form'>

        </div>
      </div>
    )
  }
}

export default App;
