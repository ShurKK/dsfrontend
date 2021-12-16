import React from "react";
import CharacterCard from "./character_card";

const CharactersComponent = ({ characters }) => {

  return (
  <>
    
    <div className="cards-list">
      {
        characters.map((character, i) => {
          return (
            <CharacterCard
              character={character}
              key={character.node.name}
            />
          );
        })
      }
    </div>
  </>
  );
};

export default CharactersComponent;