import React from 'react';
import PropTypes from "prop-types";


const propTypes = {
  source: PropTypes.string,
  url: PropTypes.string,
  user: PropTypes.string,
};

class Fetcher extends React.Component {
  constructor(props){
    super(props);
    this.state={
      myself:[],
      followers:[]
    };
  }
  handleClick(event){
    let datos = [];
    fetch("/getFollowers/" + this.props.user)
    .then((res) => res.json())
    .then((data) => {
      this.setState({myself:data });
      this.setState({followers:data.seguidores.data})
  })
    .catch(error  => {
      console.log('There has been a problem with your fetch operation: '+ error.message);
    });
  }

  render() {
    const self = this;
    var followers = this.state.followers;
    return (
      <li>
      <div className="click-to-top"><img src={this.props.source} className="App-logo" onClick={(event) => this.handleClick(event)} />
        <span>
        {self.props.url}
        </span></div>
      <ul className="lists">
      {followers.map(function(follower, i){  
        if(i < parseInt(self.props.maxFollowers))
        return (<li><Fetcher source={follower.avatar_url} user = {follower.login} url={follower.html_url} maxFollowers={self.props.maxFollowers}/></li>)
      })}
      </ul>
      </li>
      );
  }
}
Fetcher.propTypes = propTypes;
export default Fetcher;