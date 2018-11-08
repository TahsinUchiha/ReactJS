import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';
import Button from './Button.js';
import PersonList from './PersonList.js'
import Search from './Search.js';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      img: ''
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
   const api_key = 'dc6zaTOxFJmzC';
  const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
// const api_key = 'bc88b970';
// const url = `http://www.omdbapi.com/?t=${this.state.term}&api_key=${api_key}`;
fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ term:'', img: data.data[0].images.fixed_height.url }))
      .catch(e => console.log('error', e));
  }

  render() {
    return (
      
      // <div className="App">
      // <h1>Hello</h1>
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       {/* Edit <code>src/App.js</code> and save to reload. */}
            
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://orig00.deviantart.net/9f4b/f/2015/143/1/d/rasengan__gif__by_jetstreamx14-d8ugrx3.gif"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //      (っ◔◡◔)っ ♥ AnimatedGif ♥
      //     </a>
      //   </header>
   
        <div className="App">
      {/* <PersonList></PersonList> */}
      <Button></Button>
       <Hello></Hello>
      <Search></Search>

       <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Search Gifs</button>
          {/* <button>Search Films</button> */}
        </form>
        <img src={this.state.img} height="200" alt={this.state.term} />
        </div>

    );
  }
}


