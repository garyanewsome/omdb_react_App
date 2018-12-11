import React, { Component } from 'react'

class Movie extends Component {
  render() {
    if((Object.keys(this.props.data).length === 0)) {
      return(<div></div>)
    }

    var data = this.props.data
    console.log(data)
    return(
      <div className="movie">
        <img src={data.Poster} alt={data.Title} />
        <h1>{data.Title}</h1>
        <div>{data.Year}</div>
        <div>{data.Awards}</div>
        <div>{data.Plot}</div>
        <div>{data.Actors}</div>
        <div>{data.Writer}</div>
        <div>{data.BoxOffice}</div>
      </div>
    )
  }
}

export default Movie
