import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import Img from "gatsby-image";
import  ContextContainer  from "../components/context_container";

const CharacterCard = ({ character }) => {
  const { appState, updateAppState } = useContext(ContextContainer);
  return (
   <>
   <a href="/" onClick={(e) => showCharacter(e, character)}>
    <div className="episode-card-1">
        <GatsbyImage
           
            alt={`Picture for ${character.node.name} character`}
            image={character.node.Portrait[0].localFile.childImageSharp.gatsbyImageData}
            layout="fullWidth"
          />    
        <div className="eposode-name valign-text-middle episodes-titles">{character.node.name}</div>
    </div>
    </a>
    </> 
  );
};

function showCharacter(e, character) {
  e.preventDefault();
  //updateAppState({ ...appState, picked_episode: character.name });
}

export default CharacterCard;
