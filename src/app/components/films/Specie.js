import PropTypes from 'prop-types'
import axios from 'axios'
import React, { Component } from 'react'

class Specie extends Component {
  state = {
    specie: null
  }
  async componentDidMount() {
    const { data } = await axios.get(`${this.props.url}?format=json`)
    this.setState({ specie: data })
  }

  render() {
    return this.state.specie && (
      <>
        <p className="hover:underline cursor-pointer">{this.state.specie.name}</p>
      </>
    )
  }
}

Specie.propTypes = {
  url: PropTypes.string.isRequired
}

export default Specie
