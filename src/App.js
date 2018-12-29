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
    axios.get(`http://www.omdbapi.com/?apikey=55cc1c7b&t=${this.state.searchTerm}`)
      /*eslint no-undef: 1*/
      .then(function (response) {
        that.setState({ movieData: response.data })
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
      <div className="App movie-app">
        <div className="movie-search">
          <input
            className="movie-search-input"
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </div>
        <div className="movie-search-btns">
          <button onClick={this.search} className="movie-btns search-btn">Search</button>
          <button onClick={this.reset} className="movie-btns reset-btn">Reset</button>
        </div>
        <Movie data={this.state.movieData} />
      </div>
    )
  }
}

export default App
