import React from 'react';
import './App.css';
import State from './State';
import DisplayState from './DisplayState';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name: '',
      id: '',
    }
  }

  returnedData = (event) =>{
    this.setState({name: event.target.value})
  }

  render(){
    return(
      <div>
        <h1>Hallow</h1>
        <State userInfo={this.returnedData}/>
        <DisplayState name={this.state.name} id={this.id}/>
      </div>
    )
  }
}

export default App;
