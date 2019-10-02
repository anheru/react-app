import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Film from './Film'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const FilmList = ({ films }) => {
  return (
    <List>
      {films.map((c) => (
        <li key={c.episode_id} className="w-full sm:w-1/3 lg:w-1/4 px-3 mt-4">
          <Film {...c} />
        </li>
      ))}
    </List>
  )
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      episode_id: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

export default FilmList
