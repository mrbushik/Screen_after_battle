import React from "react";

interface PlayerTooltipElementProps {
  deadCount: number;
  killCount: number;
}

export const PlayerTooltipElement: React.FC<PlayerTooltipElementProps> = ({
  deadCount,
  killCount,
}) => {
  return (
    <div className="player-tooltip__container">
      <p>Kills count: {killCount}</p>
      <p>Deaths count: {deadCount}</p>
    </div>
  );
};
