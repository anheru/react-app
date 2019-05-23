import React, {Component} from 'react'
import Comics from '../components/comic/ComicList'
import API from '../utils/API'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { comics: [] }
  }

  async componentDidMount() {
    const { data } = await API.get('/comics')
    this.setState({
      comics: data.data.results.map(c => ({
        id: c.id,
        title: c.title,
        thumbnail: c.thumbnail.path + '/portrait_incredible.' + c.thumbnail.extension
      }))
    })
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