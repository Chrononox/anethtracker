import React from 'react';
import './App.css';
import Form from './Components/Form/Form';

//TODO

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currtime: '00:00',
      hr: '00',
      resp: '00',
      temp: '00.0',
      spo2: '00',
      co2: '00',
      bp: '00',
      iso: '00',
      ivf: '00',
      ekg: '000',
    }
  }

  //set the time when button is clicked  use =new Date() https://tecadmin.net/get-current-date-time-javascript/
  setcurrtime(event){
    console.log('Time not working yet')
  }

  ///Data State Setters.
  setresp = (event) => this.setState({resp: event.target.value});
  sethr =   (event) => this.setState({hr: event.target.value})
  settemp = (event) => this.setState({temp: event.target.value});
  setspo2 = (event) => this.setState({spo2: event.target.value});
  setco2 =  (event) => this.setState({co2: event.target.value});
  setbp =   (event) => this.setState({bp: event.target.value});
  setiso =  (event) => this.setState({iso: event.target.value});
  setivf =  (event) => this.setState({ivf: event.target.value});
  setekg =  (event) => this.setState({ekg: event.target.value});

 

  render(){
    
    return(
      <div>
        <h1>Yo</h1>
        <div className='ptinfo'>
          {/* <Ptinfo /> */}
        </div>
        <div className='table'>
          {/* <Table /> */}
        </div>
        <div className='form'>
          <Form
            time={this.state.time} setcurrtime={this.setcurrtime}
            hr={this.state.hr} sethr={this.sethr}
            resp={this.state.resp} setresp={this.setresp}
            temp={this.state.temp} settemp={this.settemp}
            spo2={this.state.spo2} setspo2={this.setspo2}
            co2={this.state.co2} setco2={this.setco2}
            bp={this.state.bp} setbp={this.setbp}
            iso={this.state.iso} setiso={this.setiso}
            ivf={this.state.ivf} setivf={this.setivf}
            ekg={this.state.ekg} setekg={this.etekg}
          />
        </div>
      </div>
    )
  }
}

export default App;
