import React, { Component } from 'react'
import ComicList from '../containers/ComicList'
import { fetchComicsIfNeeded } from '../../actions'
import { connect } from 'react-redux'

class Comics extends Component {
  async componentDidMount() {
    this.props.dispatch(fetchComicsIfNeeded())
  }

  render() {
    return (
      <div className="container">
        <h2 style={{ lineHeight: 1, textAlign: 'center', color: 'red', fontSize: '48px', marginBottom: '1rem' }}>API Marvel</h2>
        <ComicList/>
      </div>
    )
  }
}

export default connect()(Comics)
