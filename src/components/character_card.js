import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import Img from "gatsby-image"

const CharacterCard = ({ character }) => {
  return (
   // <Link to={`/episode/${episode.node.slug}`} className="uk-link-reset"> // <Img  loading="eager" fluid={episode.node.thumb.localFile.childImageSharp.fluid} />
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
  
}

export default CharacterCard;
