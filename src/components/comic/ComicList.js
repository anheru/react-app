import React from 'react'
import ComicItem from './ComicItem'
import PropTypes from 'prop-types'

import './ComicList.css'

const ComicList = ({comics}) => {
  const comicsRender = comics.map((c) => (
    <li key={c.id} style={{width: '20%', marginTop: '2rem'}}>
      <ComicItem {...c}/>
    </li>
  ))

  return(
    <ul className="comic-list App-container">
      {comicsRender}
    </ul>
  )
}

ComicList.propTypes = {
  comics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default ComicList