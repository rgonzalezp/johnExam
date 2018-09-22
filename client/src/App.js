import React, { Component } from 'react';
import './App.css';
import WarningModal from './WarningModal.js'
import vegaEmbed from 'vega-embed';
import axios from 'axios';

class App extends Component {

constructor(props)
{
    super(props);
    this.warningJson = React.createRef();
    this.warningData = React.createRef();
    this.handleChangeData = this.handleChangeData.bind(this);
    this.handleChangeSpec = this.handleChangeSpec.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }
state = {
      spec:{},
      error:'',
      data:{}
    };

makeGraph(){
  var myData = null;
  var dataName = null;
  try{
    dataName = this.state.spec.data.name;
  } catch (err){
    this.setState({error:err.toString()})

    //this checks for malformed JSON, it doesnt check that the attributes are correct
  }

  try{
    var makingData = JSON.parse(this.divTargetData.value);
    myData = makingData.data;
  } catch (err){
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


    const view = vegaEmbed(this.barChart, this.state.spec, { config: config, tooltip: { theme: 'dark' }, defaultStyle: true }).catch(err => {
    console.log("Not valid Json yet")})
    .then((res) =>  res.view.insert(dataName, this.state.data.data).run())
    .catch(error => console.log("Failure to insert graphic"));

  }

  handleChangeData(event){
  try{
    this.divTargetData.value=JSON.stringify(event,null,2);
    const json = this.divTargetData.value
    this.setState({data: JSON.parse(json)});
  }
  catch(err){

  }
}

 handleChangeSpec(event){
  try{
    const json = this.divTarget.value
    this.setState({spec: JSON.parse(json)});
    this.makeGraph();
  }
  catch(err){
    console.log(err);
 this.setState({error:err.toString()})
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
      complete: this.handleChangeData
    });
  } catch (err){
    this.warning.current.toggle("fileformat");
    //this checks for file formatting JSON
  }
}
  saveGraph(){

console.log(this.state.spec);
    axios.post('/graphs',this.state.spec)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="container">
          <h1 className="App-title">Vega-lite-editor minimalistic</h1>
          <WarningModal ref={this.warningData}></WarningModal>
          <WarningModal ref={this.warningJson}></WarningModal>
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
          onChange={this.handleChangeSpec}
          cols="43"
          rows="28"
          ref= {(div) => this.divTarget = div}
          placeholder="Input your spec JSON manually">
          </textarea>
          </div>


          <div className="col-xs-12 col-sm-4">

          <p className="">
          Input your csv or an array of JSON objects (Data)
          </p>
          <textarea
          onChange={() =>  this.makeGraph()}
          cols="43"
          rows="28"
          ref= {(div) => this.divTargetData = div}
          placeholder="Select a csv file from your computer, or input manually a JSON with the dataset">
          </textarea>
          </div>


          
          <div className="col-xs-12 col-sm-4">
          <button className="btn btn-primary" onClick={() =>  this.saveGraph()}>Save this Graph</button>
          <div className="graph" ref= {(div) => this.barChart = div}>
      {this.state.error}
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
