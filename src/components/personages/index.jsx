import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharacter } from '../../hooks/useCharacter';
import { Character } from './styles'
import {CharacterAttributes} from './CharacterAttributes'


const Personajes = () => {
  const params = useParams();
  const { character } = useCharacter(params.id);

  return (
  <>
    {
      !!character && (
      <Character>
        <div>
          <img src={character.image} alt={character?.name} />
        </div>
        <div>
          <table>
            <tbody>
              {character?.name && <CharacterAttributes atributte={character.name} tag='Name:'/>}
              {character?.gender && <CharacterAttributes atributte={character.gender} tag='Gender:'/>}
              {character?.type && <CharacterAttributes atributte={character.type} tag='Type:'/>}
              {character?.species && <CharacterAttributes atributte={character.species} tag='Species:'/>}
              {character?.location.name && <CharacterAttributes atributte={character.location.name} tag='Location:'/>}
            </tbody>
          </table>
        </div>
      </Character>
      )
    }
  </>
    
  )
}

export default Personajes