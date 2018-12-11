import React, { Component } from 'react'

import axios from 'axios'

import Movie from './components/Movie'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      movieData: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)
    this.reset = this.reset.bind(this)
  }
  handleChange(e) {
    this.setState({ searchTerm: e.target.value})
  }
  search() {
    var that = this
    axios.get(`http://www.omdbapi.com/?apikey=YOUR_KEY_HERE&t=${this.state.searchTerm}`)
      /*eslint no-undef: 1*/
      .then(function (response) {
        that.setState({ movieData: response.data})
      })
      .catch(function (error) {
        console.log('ACK! : ', error)
      })
      /*eslint no-undef: 1*/
  }
  reset() {
    this.setState({
      searchTerm: '',
      movieData: {}
    })
  }
  render() {
    return (
      <div className="App">
        <div className="appSearch">
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button onClick={this.search}>Search</button>
          <button onClick={this.reset}>Reset</button>
        </div>
        <Movie data={this.state.movieData} />
      </div>
    )
  }
}

export default App
