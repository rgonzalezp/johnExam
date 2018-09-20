import React, { Component } from 'react';
import './App.css';
import BarChart from './BarChart.js'
import InputBox from './InputBox.js'
import vegaEmbed from 'vega-embed';

class App extends Component {

constructor(){
    super();
    this.state={
      json:{}
    };
  }

  myFunction(settings){

    var config = {
      // default view background color
      // covers the entire view component
      background: "#ffffff",
      axis: {
        labelFont: "serif",
        labelFontSize: 16,
        tickWidth: 3,
        tickColor: "red"
      }
    };
    var spec = {settings};
    console.log(spec);
    vegaEmbed(this.barChart, spec, { config: config, tooltip: { theme: 'dark' }, defaultStyle: true }).then(function (result) {
      
    }).catch(console.error);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="container">
          <h1 className="App-title">Welcome to Vega-lite-editor minimalistic</h1>
          <button className="btn btn-primary" onClick={() => {
          var obj = {
            "x": "John",
            "y": {"field":"Also John", "type": "quantitative"}
          };
          this.state.json =obj;
          this.divTarget.value=JSON.stringify(obj,null,2)
           }}>toJson</button>
          <button className="btn btn-primary" onClick={() => {
          (spec) => this.myFunction(spec)
           }}>Vega Graph</button>
          <div className="container-fluid">
          <div className="row">
          <div className="col-xs-12 col-sm-6">
          <textarea
          cols="80"
          rows="40"
          ref= {(div) => this.divTarget = div}
          onChange={(settings) => this.myFunction(settings)}>
          Input your JSON
          </textarea>
          </div>
          <div className="col-xs-12 col-sm-6">
          <div ref= {(div) => this.barChart = div}>
          </div>
          </div>
          </div>
          </div>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
