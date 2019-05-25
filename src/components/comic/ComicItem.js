import React from 'react'
import PropTypes from 'prop-types'

import './ComicItem.css'

const ComicItem = ({ id, thumbnail, title }) => {
  return(
    <div className="comic-item">
      <img
        className="comic-item__image"
        src={thumbnail}
        title={title}
        alt={title}
      />
      <p className="comic-item__title">{title}</p>
    </div>
  )
}

ComicItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
}

export default ComicItem