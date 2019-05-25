import React, {Component} from 'react'
import Comics from '../components/comic/ComicList'
import API from '../utils/API'
import store from '../store'
import { setComics } from '../reducers/comics'
// import { connect } from 'react-redux'

// @connect()
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { comics: [] }
  }

  async componentDidMount() {
    const { data } = await API.get('/comics')
    const comics = data.data.results.map(c => ({
      id: c.id,
      title: c.title,
      thumbnail: c.thumbnail.path + '/portrait_incredible.' + c.thumbnail.extension
    }))
    console.log(store.getState())
    store.dispatch(setComics(comics))
    this.setState({ comics })
  }

  render() {
    return (
      <div className="App-content">
        <h2 style={{ textAlign: 'center', color: 'red', fontSize: '48px', margin: 0 }}>API Marvel</h2>
        <Comics comics={this.state.comics} />
      </div>
    )
  }
}

export default Index