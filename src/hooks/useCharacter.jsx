import { useEffect, useState } from "react";
import { getCharacter } from './utils'

export const useCharacter = (id) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacter(id, setCharacter);
  },[])

  return({ character });
}