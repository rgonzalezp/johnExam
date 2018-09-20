import React, { Component } from 'react';
import './App.css';
import BarChart from './BarChart.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to eskeleto</h1>
          <BarChart/>
          <div id="vis"></div>
        </header>
      </div>
    );
  }
}

export default App;
