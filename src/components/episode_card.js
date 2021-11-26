import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import Img from "gatsby-image"

const EpisodeCard = ({ episode }) => {
  return (
   // <Link to={`/episode/${episode.node.slug}`} className="uk-link-reset"> // <Img  loading="eager" fluid={episode.node.thumb.localFile.childImageSharp.fluid} />
   <>
    <div className="episode-card-1">
   
        <GatsbyImage
           
            alt={`Picture for ${episode.node.name} episode`}
            image={episode.node.thumb.localFile.childImageSharp.gatsbyImageData}
            layout="fullWidth"
          />
    </div>
    <div className="eposode-name valign-text-middle episodes-titles">{episode.node.name}</div>
    </> 
  );
};

export default EpisodeCard;
