export interface BattleResultModel {
  leftTeam: TeamModel;
  rightTeam: TeamModel;
}
export interface TeamModel {
  winner: boolean;
  players: PlayersModel[];
}

export interface PlayersModel {
  id?: number;
  alive: boolean;
  deadCount: number;
  killCount: number;
  nickName: string;
  score: number;
}
