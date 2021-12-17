import React from "react";
import {useContext } from "react";
import  ContextContainer  from "../components/context_container";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import Img from "gatsby-image"

const EpisodeCard = ({ episode }) => {
  const { appState, updateAppState } = useContext(ContextContainer);
  let episodeCardClass = "episode-card";
  if (appState.picked_episode == episode.node.number) { // highlight selected episode
    episodeCardClass = "episode-card selected"
    }; 

  return (
   // <Link to={`/episode/${episode.node.slug}`} className="uk-link-reset"> // <Img  loading="eager" fluid={episode.node.thumb.localFile.childImageSharp.fluid} />
   <>  
   <a href="/" onClick={(e) => {e.preventDefault();updateAppState({ ...appState, picked_episode: episode.node.number }); } }>
      <div className={episodeCardClass}> {/* highlight selected episode */} 
        <GatsbyImage
           
            alt={`Picture for ${episode.node.name} episode`}
            image={episode.node.thumb.localFile.childImageSharp.gatsbyImageData}
            layout="fullWidth"
          />    
        <div className="eposode-name valign-text-middle episodes-titles">{episode.node.name}</div>
    </div>
    </a>
    </> 
  );
};


export default EpisodeCard;
