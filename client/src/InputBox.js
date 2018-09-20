import React, { Component } from 'react';

class InputBox extends Component {

  onKeyPress(evt){
    if(evt.key == "Enter")
      this.props.onSearch(evt.target.value)
  }

  render() {

//When using this component invoke it like this <InputBox onSearch={this.onSearch.bind(this)} />, and make a InputBox Method in the component you use this component
    return (
      <div className="InputBox">
      <input type="text"
      ref={(input) => this.input = input}
      onKeyPress = {this.onKeyPress.bind(this)}/>
      <input type="file"
      ref={(input) => this.input = input}
      onKeyPress = {this.onKeyPress.bind(this)}/>
      </div>
      );
  }
}

export default InputBox;