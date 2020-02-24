import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacter(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });

  }, []);

  return (
    <section className="character-list">
      <SearchForm />
      {characters.map(character => (
        <CharacterCard
          name={character.name}
          image={character.image}
        />
      ))}
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
    </section>
  );
}
