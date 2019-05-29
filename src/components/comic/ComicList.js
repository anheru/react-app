import React from 'react'
import PropTypes from 'prop-types'
import './ComicList.css'
import styled from 'styled-components'

// const ComicItem = React.lazy(() => import('./ComicItem'))
import ComicItem from './ComicItem'

const ListItem = styled.li`
  width: 20%;
  margin-top: 2rem;
`

const ComicList = ({comics}) => {
  return(
    <ul className="comic-list container">
      {comics.map((c) => (
        <ListItem key={c.id}>
          <ComicItem {...c}/>
        </ListItem>
      ))}
    </ul>
  )
}

ComicList.propTypes = {
  comics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

export default ComicList
