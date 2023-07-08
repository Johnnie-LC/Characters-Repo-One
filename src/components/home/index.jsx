import React, { Suspense } from 'react'
import { Link } from 'react-router-dom';
import { Character } from './styles'

function Home({ characters }) {
  const path = '/RickAndMorty';
  return (
    <>
      {
        characters?.map((character) => (
          <Character key={character.id}>
            <div>
            <Suspense fallback={<div>Loading</div>}>
              <img src={character.image} alt={character.name} loading='lazy'/>
            </Suspense>
            </div>
            <div>
              <Link to={`${path}/personaje/${character.id}`}>{character.name}</Link>
            </div>
          </Character>
        ))
      }
    </>
  )
}

export default Home