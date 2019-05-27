// import fetch from 'cross-fetch'
import API from '../utils/API'

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

const REQUEST_COMICS = 'comics/REQUEST_COMICS'
function requestComics () {
  return { type: REQUEST_COMICS }
}

const RECEIVE_COMICS = 'comics/RECEIVE_COMICS'
function receiveComics (comics) {
  return { type: RECEIVE_COMICS, comics}
}

const FAILURE_COMICS = 'comics/FAILURE_COMICS'
function failureComics () {
  return { type: FAILURE_COMICS }
}

function fetchComics () {
  return function (dispatch) {
    dispatch(requestComics())
    return API.get('/comics')
      .then(({ data }) => dispatch(receiveComics(data.data.results.map(c => ({
          id: c.id,
          title: c.title,
          thumbnail: c.thumbnail.path + '/portrait_incredible.' + c.thumbnail.extension
        })))))
      .catch(({response}) => dispatch(failureComics()))
  }
}

function shoulFetchComics (state) {
  const { comics } = state
  return !comics.all.length ? true : comics.isFetching ? false : comics.didInvalidate
}

export function fetchComicsIfNeeded () {
  return (dispatch, getState) => {
    if (shoulFetchComics(getState())) {
      return dispatch(fetchComics())
    } else {
      return Promise.resolve()
    }
  }
}
