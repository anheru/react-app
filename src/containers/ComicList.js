import { connect } from 'react-redux'
import ComicList from '../components/comic/ComicList'

const mapStateToProps = state => ({
  comics: state.comics.all
})

export default connect(mapStateToProps)(ComicList)
