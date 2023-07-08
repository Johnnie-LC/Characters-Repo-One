import { useEffect, useState } from "react";
import { getAllCharacters } from './utils'

export const useAllCharacters = () => {
  const [characters, setCharacters] = useState()

  useEffect(() => {
    getAllCharacters(setCharacters);
  },[])

  return({ characters });
}