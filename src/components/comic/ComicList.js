import React from 'react'
import ComicItem from './ComicItem'
import './ComicList.css'

const ComicList = ({comics}) => {
  const comicsRender = comics.map((c) => (
    <li key={c.id} style={{width: '20%', marginTop: '2rem'}}>
      <ComicItem comic={c}/>
    </li>
  ))

  return(
    <ul className="comic-list App-container">
      {comicsRender}
    </ul>
  )
}

export default ComicList