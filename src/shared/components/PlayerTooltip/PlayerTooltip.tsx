import React, { useState } from "react";

import { SeeMoreIcon } from "../../icons/SeeMoreIcon";

import { PlayerTooltipElement } from "./PlayerTooltipElement";

interface PlayerTooltipProps {
  deadCount: number;
  killCount: number;
}

export const PlayerTooltip: React.FC<PlayerTooltipProps> = ({
  deadCount,
  killCount,
}) => {
  const [showToolTip, setShowToolTip] = useState<boolean>(false);

  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };

  return (
    <>
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <SeeMoreIcon />
      </div>
      {showToolTip && (
        <PlayerTooltipElement deadCount={deadCount} killCount={killCount} />
      )}
    </>
  );
};
