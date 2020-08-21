import React, { Component } from 'react';
import PiggyBank from './PiggyBank';
import './App.css';

class App extends Component {
  render() {
    return (
      <PiggyBank title="Pig Scratchings" depositAmount={15} withdrawAmount={5}/>
    );
  }

}

export default App;
