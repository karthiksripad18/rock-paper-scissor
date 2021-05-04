import { RPS, OUTCOME} from './constants';

export interface gameObj {
    id: number;
    playerPick:  RPS;
    compPick: RPS;
    result: OUTCOME;
};

export interface gameState {
    playerName: string | null;
    numberOfGames: number | null;
    numberOfGamesLeft: number | null;
    gameHistory: gameObj[];
};