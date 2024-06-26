import React, { useEffect, useState } from "react";
import axios from "axios";

import { TeamSeparator } from "../shared/components/TeamSeparator";
import { UserTable } from "../shared/components/UserTable";

import { BattleResultModel } from "../models";
import "../styles/teamsStatistics.scss";

export const PlayersStatisticsPage = () => {
  const [gameResults, setGameResults] = useState<
    undefined | BattleResultModel[]
  >();

  useEffect(() => {
    axios
      .get(
        "https://team-battle-9e052-default-rtdb.europe-west1.firebasedatabase.app/batleResults.json"
      )
      .then((response: any) => {
        setGameResults(Object.values(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div
      className={
        gameResults?.length ? "page-container__wrapper" : "page-container"
      }
    >
      <div className="team-statistics__wrapper">
        {gameResults ? (
          <>
            <UserTable
              teamInfo={gameResults[0].leftTeam}
              teamPosition={"left"}
            />
            <TeamSeparator />
            <UserTable
              teamInfo={gameResults[0].rightTeam}
              teamPosition={"right"}
            />
          </>
        ) : (
          <div className="loading-data">Loading ...</div>
        )}
      </div>
    </div>
  );
};
