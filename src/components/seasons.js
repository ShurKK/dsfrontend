import React, { useState, useContext } from "react";
import SeasonCard from "./season_card";

const SeasonsComponent = ({ seasons }) => {

  return (
  <>
    <div className="season-picker">
      {
        seasons.map((season, i) => {
          return (
            <SeasonCard
              season={season}
              key={season.name}
            />
          );
        })
      }
    </div>
  </>
  );
};

export default SeasonsComponent;