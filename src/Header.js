import React, { Component } from 'react';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        header: "Header",
        content: "content"
    }
}

  render() {
    return (
   <div>
<Header headerprop={this.state.header}/>
<Content contentprop={this.state.content}/>
   </div>
    );
}
}
