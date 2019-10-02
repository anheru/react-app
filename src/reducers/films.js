import { FAILURE_FILMS, REQUEST_FILMS, RECEIVE_FILMS } from '../actions'

export default function reducer(state = {
  isFetching: false,
  didInvalidate: false,
  all: []
}, action) {
  switch (action.type) {
    case FAILURE_FILMS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      }
    case REQUEST_FILMS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_FILMS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        all: action.films
      }
    default:
      return state
  }
}
