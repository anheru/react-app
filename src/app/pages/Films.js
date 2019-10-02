import React, { Component } from 'react'
import FilmList from '../containers/FilmList'
import { fetchFilmsIfNeeded, sortByEpisode, sortByRelease } from '../../actions'
import { connect } from 'react-redux'

class Films extends Component {
  async componentDidMount() {
    this.props.dispatch(fetchFilmsIfNeeded())
  }

  sortRelease = () => {
    this.props.dispatch(sortByRelease())
  }

  sortEpisode = () => {
    this.props.dispatch(sortByEpisode())
  }
  render() {
    return (
      <div className="container">
        <h2 style={{ lineHeight: 1, textAlign: 'center', color: 'red', fontSize: '48px', marginBottom: '1rem' }}>API SWAPI</h2>
        <button onClick={this.sortRelease} className="btn mr-3 mb-3">Sort by release date</button>
        <button onClick={this.sortEpisode}  className="btn mb-3">Sort by episode</button>
        <FilmList/>
      </div>
    )
  }
}

export default connect()(Films)
