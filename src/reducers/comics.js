const SET_ALL = 'comics/SET_ALL'

export default function reducer (state = [], action) {
  switch (action.type) {
    case SET_ALL:
      return action.comics
    default:
      return state
  }
}

export function setComics (comics) {
  return { type: SET_ALL, comics}
}