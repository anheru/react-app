import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Film.css'

const FilmItem = ({ episode_id, release_date, title }) => {
  return (
    <Link to={`/films/${episode_id}`} className="px-4 flex-col hover:shadow-md rounded-lg overflow-hidden text-center h-32 md:h-64 flex items-center justify-center">
      <p className="text-xl md:text-2xl leading-none mb-2">{ title }</p>
      <p>Episode: {episode_id}</p>
      <p className="text-xs">{ release_date }</p>
    </Link>
  )
}

FilmItem.propTypes = {
  episode_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
}

export default FilmItem
