import React from "react";
import {useContext } from "react";
import  ContextContainer  from "../components/context_container";
import { GatsbyImage } from "gatsby-plugin-image"

const SeasonCard = ({ season }) => {
  const { appState, updateAppState } = useContext(ContextContainer);
  let seasonCardClass = "season-box";
  if (appState.picked_season == season.number) { // highlight selected episode
    seasonCardClass = "selected season-box"
    }; 

  return (
   <>
   {/* in Season click make it selected and reset the Selected episode to 1 in order not to spoil by showing 100 episode of new season */}     
   <a href="/" onClick={(e) => {e.preventDefault();updateAppState({ ...appState, picked_season: season.number, picked_episode: 1 }); } }>
      <div className={seasonCardClass}> {/* highlight selected episode */} 
        <div className="season-text valign-text-middle episodes-titles">{season.name}</div>
    </div>
    </a>
    </> 
  );
};


export default SeasonCard;
