import React, { Component} from 'react'

class Comic extends Component {
  render () {
    return (
      <>
        <p>ID: {this.props.match.params.id}</p>
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
