import React, { Component } from 'react';
import './App.css';
import BarChart from './BarChart.js'
import InputBox from './InputBox.js'
import vegaEmbed from 'vega-embed';

class App extends Component {

constructor(){
    super();
    this.state={
      error:false
    };
  }

myFunction(){
    try{
    var spec = JSON.parse(this.divTarget.value);
    this.setState({error:false})
  } catch (err){
    //this checks for malformed JSON, it doesnt check that the attributes are correct
    this.setState({error:true})
  }
    
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

    console.log(spec);
    vegaEmbed(this.barChart, spec, { config: config, tooltip: { theme: 'dark' }, defaultStyle: true }).then(function (result) {
      
    }).catch(console.error);
  }

  handleChange(event){
    try{
    var string = JSON.parse(event);
    this.setState({json: string});
  }catch(err){

  }
}
  onKeyPress(evt){

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
          <input type="file"
      ref={(input) => this.input = input}
      onKeyPress = {this.onKeyPress.bind(this)}/>
          <button className="btn btn-primary" onClick={() =>  this.myFunction()
           }>Vega Graph</button>
          <div className="container-fluid">
          <div className="row">
          <div className="col-xs-12 col-sm-6">
          <textarea
          cols="80"
          rows="30"
          ref= {(div) => this.divTarget = div}
          placeholder="Input your JSON manually">
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
