import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Comic from './Comic'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 20%;
  margin-top: 2rem;
`

const ComicList = ({ comics }) => {
  return (
    <List>
      {comics.map((c) => (
        <ListItem key={c.id} className="w-full sm:w-1/3 lg:w-1/4 px-3">
          <Comic {...c} />
        </ListItem>
      ))}
    </List>
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
