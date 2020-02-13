import React from 'react';
import './App.css';
import Form from './Components/Form/Form'
import Button from './Components/Button/Button'
import Log from './Components/Log/Log'




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
      displayArray: [],
    }
  }

  //setState functions for vitals(form)
  settime =(event) => this.setState({time: event.target.value})
  sethr  = (event) => this.setState({hr: event.target.value})
  setresp =(event) => this.setState({resp: event.target.value})
  settemp =(event) => this.setState({temp: event.target.value})
  setspo2 =(event) => this.setState({spo2: event.target.value})
  setco2 =(event) => this.setState({co2: event.target.value})
  setbp =(event) => this.setState({bp: event.target.value})
  setiso =(event) => this.setState({iso: event.target.value})
  setivf =(event) => this.setState({ivf: event.target.value})
  setekg =(event) => this.setState({ekg: event.target.value.toUpperCase()})

  //set values to an array for storage
  setToArray=()=>{
    let tempArray = [];
    let temp = this.state;
    for (const stat in temp){
      // console.log(`${stat}: ${temp[stat]}`)
      if(stat === 'displayArray'){
        //dont do nuffin with this. Probebly can be done nicer later.
      }else{
        tempArray.push(temp[stat]);
      }
    }
    this.state.displayArray.push(tempArray);
    console.log(this.state.displayArray);
    this.makeUpdate();
  }

  //reset forms with recent data as placeholder NOT WORKING maybe no place holder data to reduce confusion
  makeUpdate=()=>{
    this.setState(this.state);
  }

  render(){
    return(
      <div className="flex justify-center">
        <div className='ba bw2 b--navy br4  pa3 bg-silver'>
          <Log displayArray={this.state.displayArray}/>
        </div>
        <div className='ba bw2 b--navy br4 mw5 pa3 bg-silver'>
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
