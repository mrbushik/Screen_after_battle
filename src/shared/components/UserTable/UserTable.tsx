import React from "react";

import { PlayersModel, TeamModel } from "../../../models";

import { PayerStatistics } from "../PlayerStatistic";

import { TableCaption } from "./tableCaption";

interface UserTableProps {
  teamInfo: TeamModel;
  teamPosition: "left" | "right";
}
export const UserTable: React.FC<UserTableProps> = ({
  teamInfo,
  teamPosition,
}) => {
  return (
    <table
      className={
        teamPosition === "left" ? "left-team__table" : "right-team__table"
      }
    >
      <TableCaption winnerTeam={teamInfo.winner} />
      <thead>
        <tr
          className={
            teamPosition === "left"
              ? "left-table__headers"
              : "right-table__headers"
          }
        >
          <th className="table-header__nickname">Nickname</th>
          <th className="table-header__status">Dead/Alive</th>
          <th className="table-header__score">Score</th>
        </tr>
      </thead>
      <tbody>
        {teamInfo?.players?.map((player: PlayersModel) => (
          <PayerStatistics
            key={`${player.nickName}${player.id}`}
            playerInfo={player}
            teamPosition={teamPosition}
          />
        ))}
      </tbody>
    </table>
  );
};
