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
      pet: ''
    }
  }

  returnedData = (event) =>{
    this.setState({name: event.target.value})
  }
  returnedID = (event) =>{
    this.setState({id: event.target.value})
  }
  returnedPet = (event) =>{
    this.setState({pet: event.target.value})
  }

  render(){
    return(
      <div>
        <h1>Hallow</h1>
        <State dataNeed={'Username'} userInfo={this.returnedData}/>
        <State dataNeed={'ID'} userInfo={this.returnedID}/>
        <State dataNeed={'Pet'} userInfo={this.returnedPet}/>
        
        <DisplayState
          name={this.state.name}
          id={this.state.id}
          pet={this.state.pet}
         />
      </div>
    )
  }
}

export default App;
