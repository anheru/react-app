import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Comic.css'

const ComicItem = ({ id, thumbnail, title }) => {
  return (
    <Link to={`/comics/${id}`} className="comic">
      <img
        className="comic__image"
        src={thumbnail}
        title={title}
        alt={title}
      />
      <p className="comic__title">{title}</p>
    </Link>
  )
}

ComicItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
}

export default ComicItem
