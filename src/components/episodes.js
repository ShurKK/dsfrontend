import React from "react";
import EpisodeCard from "./episode_card";

const EpisodesComponent = ({ episodes }) => {

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div className="cards-list">
          {episodes.map((episode, i) => {
            return (
              <EpisodeCard
                episode={episode}
                key={episode.node.name}
             />
              
            );
          })}
        </div>       
      </div>
    </div>
  );
};

export default EpisodesComponent;