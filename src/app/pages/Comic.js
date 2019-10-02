import React, { Component } from 'react'

class Comic extends Component {
  render() {
    return (
      <>
        <h2 className="text-5xl">ID: {this.props.match.params.id}</h2>
      </>
    )
  }
}

/* http://gateway.marvel.com/v1/public/comics/:id/
  characters
  creators
  events
  stories
*/

export default Comic
