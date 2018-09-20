import React, { Component } from 'react';

class InputBox extends Component {

  onKeyPress(evt){
    if(evt.key == "Enter")
      this.props.onSearch(evt.target.value)
  }

  render() {

//When using this component invoke it like this <SearchBox onSearch={this.onSearch.bind(this)} />, and make a onSearch Method in the component you use this component
    return (
      <div className="InputBox">
      <input type="text"
      ref={(input) => this.input = input}
      onKeyPress = {this.onKeyPress.bind(this)}/>
      </div>
      );
  }
}

export default InputBox;