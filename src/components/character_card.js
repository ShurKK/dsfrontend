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
        <div className="character-card"> {/* cover, contain, fill, inside, outside */}
         <GatsbyImage
           
            alt={`Picture for ${character.node.name} character`}
            image={character.node.Portrait[0].localFile.childImageSharp.gatsbyImageData} 
            layout="fullWidth"
            objectFit='cover' 
            objectPosition="50% 50%"
            style={ { width: "100%", heigth: "100%", aspectRatio: "1/1"  }}
          />
           {/*
            <Img
             alt = {`Picture for ${character.node.name} character`}
             imgStyle={{ objectFit: 'contain' }}
             style={{ height: "100%", width: "100%" }}
             placeholderStyle={{ height: "100%", width: "100%" }}
             fluid = {[
                    {
                        ...character.node.Portrait[0].localFile.childImageSharp.fluid, 
                        media: `(min-width: 768px)`
                    }
                ]} />
            */}
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
