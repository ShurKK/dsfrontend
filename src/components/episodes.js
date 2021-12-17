import React, { useState, useContext } from "react";
import EpisodeCard from "./episode_card";

const EpisodesComponent = ({ episodes }) => {

  return (
  <>
    <div className="season-picker">
      <div className="season-box-1">
        <div className="season-text valign-text-middle episodes-titles">SEASON 1</div>
      </div>
      <div className="season-box">
        <div className="season-text valign-text-middle episodes-titles">SEASON 2</div>
      </div>
      <div className="season-box">
        <div className="season-text valign-text-middle episodes-titles">SEASON 3</div>
      </div>
    </div>
      
    <div className="cards-list">
      {
        episodes.map((episode, i) => {
          return (
            <EpisodeCard
              episode={episode}
              key={episode.node.name}
            />
          );
        })
      }
    </div>
  </>
  );
};

export default EpisodesComponent;