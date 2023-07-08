import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home'
import Personages from './components/personages'
import { useAllCharacters } from "./hooks/useAllCharacters";

const HarryPotter = () => {
  const { characters } = useAllCharacters();
  
  return(
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/RickAndMorty" element={<Home characters={ characters } />}></Route>
        <Route path="/RickAndMorty/personaje/:id" element={<Personages />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
)};

export default HarryPotter