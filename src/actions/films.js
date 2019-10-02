import API from '../utils/apiSwapi'

export const REQUEST_FILMS = 'films/REQUEST_FILMS'
export const RECEIVE_FILMS = 'films/RECEIVE_FILMS'
export const FAILURE_FILMS = 'films/FAILURE_FILMS'

function requestFilms() {
  return { type: REQUEST_FILMS }
}

function receiveFilms(films) {
  return { type: RECEIVE_FILMS, films }
}

function failureFilms() {
  return { type: FAILURE_FILMS }
}

function fetchFilms() {
  return function (dispatch) {
    dispatch(requestFilms())
    return API.get('/films')
      .then(({ data }) => dispatch(receiveFilms(data.results.map(f => ({
        title: f.title,
        release_date: f.release_date,
        episode_id: f.episode_id
      })))))
      .catch(({ response }) => dispatch(failureFilms()))
  }
}

function shoulFetchFilms(state) {
  const { films } = state
  return !films.all.length ? true : films.isFetching ? false : films.didInvalidate
}

export function sortByRelease() {
  return (dispatch, getState) => {
    const films = getState().films.all.slice()
    return dispatch(receiveFilms(films.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))))
  }
}

export function sortByEpisode() {
  return (dispatch, getState) => {
    const films = getState().films.all.slice()
    return dispatch(receiveFilms(films.sort((a, b) => a.episode_id - b.episode_id)))
  }
}

export function fetchFilmsIfNeeded() {
  return (dispatch, getState) => {
    if (shoulFetchFilms(getState())) {
      return dispatch(fetchFilms())
    } else {
      return Promise.resolve()
    }
  }
}
