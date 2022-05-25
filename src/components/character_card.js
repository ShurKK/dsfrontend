import React, { useContext } from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import  ContextContainer  from "../components/context_container";

const CharacterCard = ({ character }) => {
  const { appState, updateAppState } = useContext(ContextContainer);
  let characterCardClass = "character-card";
  if (appState.picked_character_id == character.node.id) { // highlight selected character
    characterCardClass = "character-card selected"
    };
  return (
    <div className={characterCardClass} onClick={(e) => {e.preventDefault();updateAppState({ ...appState, picked_character_id: character.node.id }); } }>
         <GatsbyImage           
            alt={`Picture for ${character.node.name} character`}
            image={character.node.Portrait[0].localFile.childImageSharp.gatsbyImageData} 
            layout="fullWidth"
            objectFit='cover' // cover, contain, fill, inside, outside
            objectPosition="50% 50%"
            style={ { width: "100%", heigth: "100%", aspectRatio: "1/1"  }}
          />
          <div className="name valign-text-middle">{character.node.Name}</div>
    </div>
  );
};

function showCharacter(e, character) {
  e.preventDefault();
  //updateAppState({ ...appState, picked_episode: character.name });
}

export default CharacterCard;
