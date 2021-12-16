import React from "react";
import CharacterCard from "./character_card";

const CharactersComponent = ({ characters, episode }) => {

  return (
  <>
    
    <div className="cards-list">
      {
        characters.map((character, i) => {
          return ( character.node.becomes_known_episode.number === episode ? 
            <CharacterCard
              character={character}
              key={character.node.name}
            /> : ''
          ) ;
        })
      }
    </div>
  </>
  );
};

export default CharactersComponent;