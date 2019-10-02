import React, { Component } from 'react'
import apiSwapi from '../../utils/apiSwapi'
import styled from 'styled-components'
import Character from '../components/films/Character'
import Specie from '../components/films/Specie'

const OpeningCrawl = styled.p`
  transform: perspective(300px) rotateX(20deg);
  transform-origin: 50% 100%;
  text-align: justify;
`

class Film extends Component {
  state = {
    film: null
  }
  async componentDidMount () {
    const { data } = await apiSwapi.get(`films/${this.props.match.params.id}`)
    this.setState({ film: data })
  }
  render() {
    return this.state.film && (
      <div className="container text-center">
        <h2 className="text-5xl text-center font-bold leading-none mb-5">{this.state.film.title}</h2>
        <p className="text-xl">Director: {this.state.film.director}</p>
        <p className="text-xl">Producer: {this.state.film.producer}</p>
        <p className="text-xl">Episode {this.state.film.episode_id}</p>
        <OpeningCrawl className="mt-8 mb-12 md:w-2/3 mx-auto">{this.state.film.opening_crawl}</OpeningCrawl>
        <p className="text-xl">Characters:</p>
        <ul className="flex flex-wrap mb-5 text-sm">
          {
            this.state.film.characters.map((c, i) => (
              <li key={i} className="md:1/2 lg:w-1/5">
                <Character url={c}/>
              </li>
            ))
          }
        </ul>
        <p className="text-xl">Species:</p>
        <ul className="flex flex-wrap text-sm">
          {
            this.state.film.species.map((s, i) => (
              <li key={i} className="md:1/2 lg:w-1/5">
                <Specie url={s}/>
              </li>
            ))
          }
        </ul>
        {/* director, productor producer, id episodio, rastreo de apertura opening_crawl, especies y personajes */}
      </div>
    )
  }
}

export default Film
