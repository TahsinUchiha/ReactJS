import React, { Component } from 'react'
import axios from 'axios';

const API_KEY = 
// const API_URL = 'https://jsonplaceholder.typicode.com/users'
// import axios from 'axios'
// import Suggestions from '/Suggestions.js'

// const { API_KEY } = process.env
const API_URL = 'http://www.omdbapi.com/?t'

export default class Search extends Component {




state = {
    query: '',
    results: []
}

getInfo = () => {
    axios.get(`${API_URL}=${this.state.query}&apikey=${API_KEY}`)
    .then(response => {
        console.log(response.data);
        this.setState({
            results: response.data
        })
    })
}

handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      
          this.getInfo()
        
    })
  }

render() {
    return (
        <form>
            <input 
            placeholder ="Search stuff..."
            ref={input => this.search = input}
            onChange ={this.handleInputChange}
            />
            {<p>{this.state.query}</p>}
            <p>
              {this.state.results}
            </p>
        </form>
    )
}
}



