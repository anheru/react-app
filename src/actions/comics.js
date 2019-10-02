import API from '../utils/apiMarvel'

export const REQUEST_COMICS = 'comics/REQUEST_COMICS'
export const RECEIVE_COMICS = 'comics/RECEIVE_COMICS'
export const FAILURE_COMICS = 'comics/FAILURE_COMICS'

function requestComics() {
  return { type: REQUEST_COMICS }
}

function receiveComics(comics) {
  return { type: RECEIVE_COMICS, comics }
}

function failureComics() {
  return { type: FAILURE_COMICS }
}

function fetchComics() {
  return function (dispatch) {
    dispatch(requestComics())
    return API.get('/comics')
      .then(({ data }) => dispatch(receiveComics(data.data.results.map(c => ({
        id: c.id,
        title: c.title,
        thumbnail: c.thumbnail.path + '/portrait_incredible.' + c.thumbnail.extension
      })))))
      .catch(({ response }) => dispatch(failureComics()))
  }
}

function shoulFetchComics(state) {
  const { comics } = state
  return !comics.all.length ? true : comics.isFetching ? false : comics.didInvalidate
}

export function fetchComicsIfNeeded() {
  return (dispatch, getState) => {
    if (shoulFetchComics(getState())) {
      return dispatch(fetchComics())
    } else {
      return Promise.resolve()
    }
  }
}
