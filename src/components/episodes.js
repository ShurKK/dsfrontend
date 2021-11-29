import React from "react";
import EpisodeCard from "./episode_card";

const EpisodesComponent = ({ episodes }) => {

  return (
  <div class="overlap-group">
    <div class="season-picker">
      <div class="season-box-1">
        <div class="season-textvalign-text-middleepisodes-titles">SEASON 1</div>
      </div>
      <div class="season-box">
        <div class="season-textvalign-text-middleepisodes-titles">SEASON 2</div>
      </div>
      <div class="season-box">
        <div class="season-textvalign-text-middleepisodes-titles">SEASON 3</div>
      </div>
    
      
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