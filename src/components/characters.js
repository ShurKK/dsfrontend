import React, { useState, useContext } from "react";
import CharacterCard from "./character_card";
import  ContextContainer  from "../components/context_container";

const CharactersComponent = ({ characters }) => {
const { appState, updateAppState } = useContext(ContextContainer);
  return (
  <>
    
    <div className="cards-list">
      {
        characters.slice(0).reverse().map((character, i) => {
          return ( appState.picked_episode  >= character.node.becomes_known_episode.number &&
                   appState.picked_season  >= character.node.becomes_known_season.number  ? 
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