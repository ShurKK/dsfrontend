import React from "react";
import {useContext } from "react";
import  ContextContainer  from "../components/context_container";

const CharacterBio = ({ characters, bio_updates }) => {
  const { appState, updateAppState } = useContext(ContextContainer);  
  var character = characters.find( (curr_character) => {// find the selected character to show his/her bio
      return curr_character.node.id === appState.picked_character_id;
  });
  if (character == undefined) { return <></>}    
  let bio_updates_filtered= bio_updates?.filter( update => // filtering updates by selected characted and episode. We don't want to spoil
        'Character_'+update.node.character.id === character.node.id &&  //stange strapi behaviour. It add Character_ before every id
        update.node.episode.number <= appState.picked_episode &&
        update.node.season.number <= appState.picked_season
     )
  
  return (
    <div className = "bio-wrapper">   
        <div className = "bio bio-text">
            <h3>{character.node.Name} info known on S{appState.picked_season}:E{appState.picked_episode}</h3>
                <div className = "bio-update-episode">
                    <h4>General bio</h4>
                    <p>{character.node.general_bio}</p>
                </div>
                {
                    bio_updates_filtered?.map( (update,i) => {  // get all bio updates for selceted character
                               return <div className = "bio-update-episode"><h4>S{update.node.season.number}:E{update.node.episode.number} update</h4><p>{update.node.bio_update_text}</p></div>
                    })
                }
        </div> 
    </div>  
  );
};


export default CharacterBio;
