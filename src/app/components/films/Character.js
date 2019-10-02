import PropTypes from 'prop-types'
import axios from 'axios'
import React, { Component } from 'react'

class Character extends Component {
  state = {
    character: null
  }
  async componentDidMount() {
    const { data } = await axios.get(`${this.props.url}?format=json`)
    this.setState({ character: data })
  }

  render() {
    return this.state.character && (
      <>
        <p className="hover:underline cursor-pointer">{this.state.character.name}</p>
      </>
    )
  }
}

Character.propTypes = {
  url: PropTypes.string.isRequired
}

export default Character
