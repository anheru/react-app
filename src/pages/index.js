import React, {Component} from 'react'
import Comics from '../containers/ComicList'
// import store from '../store'
import { fetchComicsIfNeeded } from '../reducers/comics'
import { connect } from 'react-redux'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { comics: [] }
  }

  async componentDidMount() {
    this.props.dispatch(fetchComicsIfNeeded())
  }

  render() {
    return (
      <div className="App-content">
        <h2 style={{ textAlign: 'center', color: 'red', fontSize: '48px', margin: 0 }}>API Marvel</h2>
        <Comics/>
      </div>
    )
  }
}

export default connect()(Index)
