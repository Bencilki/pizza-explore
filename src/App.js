import React, { Component } from 'react';
import './App.css';
import PizzaListContainer from './components/PizzaListContainer'
import PizzaDetailsContainer from './components/PizzaDetailsContainer'
import AddPizzaFormContainer from './components/AddPizzaFormContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PizzaListContainer />
        <PizzaDetailsContainer/>
        <div className= "AddPizzaForm"> 
          <AddPizzaFormContainer/>
        </div>
      </div>
    );
  }
}

export default App;
