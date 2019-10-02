import { connect } from 'react-redux'
import FilmList from '../components/films/FilmList'

const mapStateToProps = state => ({
  films: state.films.all
})

export default connect(mapStateToProps)(FilmList)
