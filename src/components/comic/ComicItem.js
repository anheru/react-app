import React from 'react'
import PropTypes from 'prop-types'

import './ComicItem.css'

const ComicItem = ({comic}) => {
  return(
    <div className="comic-item">
      <img
        className="comic-item__image"
        src={comic.thumbnail}
        title={comic.title}
        alt={comic.alt}
      />
      <p className="comic-item__title">{comic.title}</p>
    </div>
  )
}

ComicItem.propTypes = {
  comic: PropTypes.object.isRequired
}

export default ComicItem