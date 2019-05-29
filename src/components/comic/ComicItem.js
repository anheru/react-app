import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './ComicItem.css'

const ComicItem = ({ id, thumbnail, title }) => {
  return(
    <Link to={`/comics/${id}`} className="comic-item">
      <img
        className="comic-item__image"
        src={thumbnail}
        title={title}
        alt={title}
      />
      <p className="comic-item__title">{title}</p>
    </Link>
  )
}

ComicItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
}

export default ComicItem
