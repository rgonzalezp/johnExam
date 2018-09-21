import React, { Component } from 'react';
import './App.css';
import WarningModal from './WarningModal.js'
import vegaEmbed from 'vega-embed';

class App extends Component {

constructor(props)
{
    super(props);
    this.warningJson = React.createRef();
    this.warningData = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

makeGraph(){
  var spec = null;
  var myData = null;
  var dataName = null;
  try{
    spec = JSON.parse(this.divTarget.value);
    dataName = spec.data.name;
  } catch (err){
    this.warningJson.current.toggle("jsonformat");
    //this checks for malformed JSON, it doesnt check that the attributes are correct
  }

  try{
    var makingData = JSON.parse(this.divTargetData.value);
    myData = makingData.data;
  } catch (err){
      this.warningData.current.toggle("dataProblem");
      //this checks for data uploaded
  }
    var config = {
      // default view background color
      // covers the entire view component
      background: "#ffffff",
      axis: {
        labelFont: "serif",
        labelFontSize: 16,
        tickWidth: 3,
        tickColor: "black"
      }
    };
      

    const view = vegaEmbed(this.barChart, spec, { config: config, tooltip: { theme: 'dark' }, defaultStyle: true }).catch(error => {return})
      .then((res) =>  res.view.insert(dataName, myData).run()).catch(error => console.log(error));
  }

  handleChange(event){
    try{
    this.divTargetData.value=JSON.stringify(event,null,2);
  }
  catch(err){

  }
}


  uploadFile(event) {
         // Your parse code, but not seperated in a function
    try{
    var csvFilePath = event.target.files[0];
    var Papa = require("papaparse/papaparse.min.js");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.handleChange
    });
  } catch (err){
    this.warning.current.toggle("fileformat");
    //this checks for file formatting JSON
  }
}

  saveGraph(){

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="container">
          <h1 className="App-title">Vega-lite-editor minimalistic</h1>
          <WarningModal ref={this.warningData}></WarningModal>
          <WarningModal ref={this.warningJson}></WarningModal>
          <button className="btn btn-primary" onClick={() => {
          var obj = {
            "x": "John",
            "y": {"field":"Also John", "type": "quantitative"}
          };
          this.state.json =obj;
          this.divTarget.value=JSON.stringify(obj,null,2)
           }}>toJson</button>
          <button className="btn btn-primary" onClick={() =>  this.makeGraph()}>Vega Graph</button>
          <input type="file"
      ref={(input) => this.input = input}
      name="Add"
      onChange={this.uploadFile}/>

          <div className="container-fluid">
          <div className="row">

          <div className="col-xs-12 col-sm-4">

          <p className="">
          Input your spec in this area. Named datasources
          </p>
          <textarea
          cols="43"
          rows="28"
          ref= {(div) => this.divTarget = div}
          placeholder="Input your spec JSON manually">
          </textarea>
          </div>


          <div className="col-xs-12 col-sm-4">

          <p className="">
          Input your csv or an array of JSON objects
          </p>
          <textarea
          cols="43"
          rows="28"
          ref= {(div) => this.divTargetData = div}
          placeholder="Select a csv file from your computer, or input manually a JSON with the dataset">
          </textarea>
          </div>


          
          <div className="col-xs-12 col-sm-4">
          <button className="btn btn-primary" onClick={() =>  this.saveGraph()}>Save this Graph</button>
          <div className="graph" ref= {(div) => this.barChart = div}>
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
