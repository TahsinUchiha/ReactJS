import React, { Component } from 'react';


export default class Button extends Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
    this.state = {iToggleOn: true};
  }
  buttonClick() {
    //alert("Haha");
    this.setState(state => ({isToggleOn: !this.state.isToggleOn
  }));
  
}
  render() {
    return (
    <button onClick={this.buttonClick}>
    {this.state.isToggleOn ? "On": "Off"}
    
    </button>);
  }
}

   
  

  
