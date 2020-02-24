import React, { useState, useEffect } from "react";
// import CharacterCard from "./CharacterCard";


export default function SearchForm({ characters }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(characters);
 
  useEffect(() => {
    
    const results = characters.filter(character => {
      return character.toLowerCase().includes(searchTerm.toLowerCase());
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
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(character => {
            return <li key={character}>{character}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}
