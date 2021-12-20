import React, { useState, useContext } from "react";
import ContextContainer  from "../components/context_container";
import ActionCard from "./action_card";


const ActionsComponent = ({ actions }) => {
  const { appState, updateAppState } = useContext(ContextContainer);
  return (
  <>
    <div className="actions-in-the-episode">
      {
        actions.map((action, i) => {
          return (
            appState.picked_season  == action.node.episode.season && 
            appState.picked_episode == action.node.episode.number
              ?
            <ActionCard
              action={action}
              key={action.node.id}
            />
            : null
          );
        })
      }
    </div>
  </>
  );
};

export default ActionsComponent;