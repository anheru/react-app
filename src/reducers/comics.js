import { FAILURE_COMICS, REQUEST_COMICS, RECEIVE_COMICS } from '../actions'

export default function reducer (state = {
  isFetching: false,
  didInvalidate: false,
  all: []
}, action) {
  switch (action.type) {
    case FAILURE_COMICS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      }
    case REQUEST_COMICS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_COMICS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        all: action.comics
      }
    default:
      return state
  }
}
