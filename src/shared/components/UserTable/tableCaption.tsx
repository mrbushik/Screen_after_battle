import React from "react";

import { CrownIcon } from "../../icons/CrownIcon";
import { PoopIcon } from "../../icons/PoopIcon";

interface TableCaptionProps {
  winnerTeam: boolean;
}
export const TableCaption: React.FC<TableCaptionProps> = ({ winnerTeam }) => {
  return (
    <>
      {winnerTeam ? (
        <caption className="table-header__winners">
          <CrownIcon />
          Winners
        </caption>
      ) : (
        <caption className="table-header__losers">
          <PoopIcon />
          Losers
        </caption>
      )}
    </>
  );
};
