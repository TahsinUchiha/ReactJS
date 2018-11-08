import React, { Component } from 'react';


class Hello extends Component {

  myFunction = () => {



  }
  render() {
    return (
      <div>
        <div>
          
        </div>
      <div>
          Hello! <br></br>
          <button onClick={this.myFunction}>Does Nothing</button>
      </div>
      </div>
    );
  }
}

export default Hello;
