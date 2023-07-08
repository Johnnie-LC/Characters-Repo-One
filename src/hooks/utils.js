import axios from "axios";

const baseUrl = 'https://rickandmortyapi.com/api/character';

export const getAllCharacters = async (setCharacters) => {  
  const rickAndMortyApi = await axios.get(baseUrl);

  try {
    setCharacters(rickAndMortyApi?.data?.results)
  } catch (error) {
    console.log(error)
  }
}

export const getCharacter = async (id, setCharacter) => {
  const character = await axios.get(`${baseUrl}/${id}`);

  try {
    setCharacter(character?.data);
  } catch (error) {
    console.log(error)
  }
}