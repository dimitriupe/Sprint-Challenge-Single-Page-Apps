import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";


export default function SearchForm({ characters }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(characters);
 
  useEffect(() => {
    
    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm, characters]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search-form">
     {/* // Add a search form here */}
     <form>
        <label htmlFor="name">Search:</label>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
        {searchResults.map(character => (
             <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </section>
  );
}
