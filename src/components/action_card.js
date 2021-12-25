import React, { useState, useContext } from "react";
//import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
//import Img from "gatsby-image";
import  ContextContainer  from "../components/context_container";
import Video from "../components/video.js";


const ActionCard = ({ action }) => {
  const { appState, updateAppState } = useContext(ContextContainer);  
  return (
   <>
   <a href="/" onClick={(e) => showAction(e, action)}>
        <div className="action-card">
           {
            action.node?.media[0]?.localFile?.childImageSharp?.gatsbyImageData ? 
                <GatsbyImage
                    alt={`Picture for ${action.node.name} action`}
                    image={action.node.media[0].localFile.childImageSharp.gatsbyImageData}
                    layout="fullWidth"            
                    objectFit='cover' 
                    objectPosition="50% 50%"
                    style={ { width: "100%", heigth: "100%", aspectRatio: "4/3"  } }
                />
            :  
                <Video
                    videoSrcURL={action.node.media[0].url}
                    videoTitle={action.node.name}
                />
           }
            <div className="name valign-text-middle">{action.node.name}</div>
        </div>
    </a>
    </> 
  );
};

function showAction(e, action) {
  e.preventDefault();
  //updateAppState({ ...appState, picked_episode: character.name });
}

export default ActionCard;
