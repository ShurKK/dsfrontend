import React, { useState, useContext } from "react";
import ContextContainer  from "../components/context_container";
import EpisodeCard from "./episode_card";


const EpisodesComponent = ({ episodes }) => {
  const { appState, updateAppState } = useContext(ContextContainer);
  return (
  <>
    <div className="cards-list">
      {
        episodes.map((episode, i) => {
          return (
            appState.picked_season == episode.node.season.number ?
            <EpisodeCard
              episode={episode}
              key={episode.node.name}
            />
            : null
          );
        })
      }
    </div>
  </>
  );
};

export default EpisodesComponent;