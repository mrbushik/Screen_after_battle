import React, { useState } from "react";

import { PlayersModel } from "../../../models";

import { FriendInviteIcon, AliveIcon, DeadIcon } from "../../icons/Icon";

import { PlayerTooltip } from "../PlayerTooltip";
import { Hourglass } from "../Hourglass";

interface PayerStatisticsProps {
  playerInfo: PlayersModel;
  teamPosition: "left" | "right";
}

export const PayerStatistics: React.FC<PayerStatisticsProps> = ({
  playerInfo,
  teamPosition,
}) => {
  const [sendFriendRequest, setSendFriendRequest] = useState<boolean>(false);

  const handleAddFriend = () => setSendFriendRequest(true);

  const getCellClassName = () => {
    return `${
      teamPosition === "left" ? "left-team__cell" : "right-team__cell"
    } ${playerInfo.alive ? "cell-alive" : "cell-dead"}`;
  };

  return (
    <>
      {playerInfo ? (
        <tr className={getCellClassName()}>
          <td className="player-nick">
            <PlayerTooltip
              deadCount={playerInfo.deadCount}
              killCount={playerInfo.killCount}
            />
            <h5 className="player-nick__title">{playerInfo.nickName}</h5>
          </td>
          <td className="player-alive">
            {playerInfo.alive ? <AliveIcon /> : <DeadIcon />}
          </td>
          <td className="player-score">{playerInfo.score}</td>
          <td className="player-friend">
            <div className="player-friend__container" onClick={handleAddFriend}>
              {sendFriendRequest ? <Hourglass /> : <FriendInviteIcon />}
            </div>
          </td>
        </tr>
      ) : (
        <tr>
          <td>no data</td>
        </tr>
      )}
    </>
  );
};
