import React from 'react';
import './App.css';
import Form from './Components/Form/Form'
import Button from './Components/Button/Button'




class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      time: '00:00',
      hr: '000',
      resp: '00',
      temp: '00.0',
      spo2: '00', //display as %
      co2: '00',
      bp: '000/00 (000)', //may break up bp to three parts
      iso: '0.0',
      ivf: '00',  //display in ml/hr
      ekg: 'NNN',
    }
  }

  //setState functions for vitals(form)
  sethr  = (event) => this.setState({hr: event.target.value})
  setresp =(event) => this.setState({resp: event.target.value})
  settemp =(event) => this.setState({temp: event.target.value})
  setspo2 =(event) => this.setState({spo2: event.target.value})
  setco2 =(event) => this.setState({co2: event.target.value})
  setbp =(event) => this.setState({bp: event.target.value})
  setiso =(event) => this.setState({iso: event.target.value})
  setivf =(event) => this.setState({ivf: event.target.value})
  setekg =(event) => this.setState({ekg: event.target.value})

  //set values to an array for storage
  setToArray=()=>{
    console.log('setting to array')
  }

  render(){
    return(
      <div>
        <div>
          {/* previous readings */}
        </div>
        <div className='center ba bw2 b--navy br4 mw5 pa3'>
          <Form className='center' 
            hr={this.state.hr} sethr={this.sethr}
            resp={this.state.resp} setresp={this.setresp}
            temp={this.state.temp} settemp={this.settemp}
            spo2={this.state.spo2} setspo2={this.setspo2}
            co2={this.state.co2} setco2={this.setco2}
            bp= {this.state.bp} setbp={this.setbp}
            iso={this.state.iso} setiso={this.setiso}
            ivf={this.state.ivf} setivf={this.setivf}
            ekg={this.state.ekg} setekg={this.setekg}
          />
          <Button setToArray={this.setToArray}/>
        </div>
        
      </div>
      
    )
  }
}

export default App;
