import {ROCK, PAPER,SCISSOR, playerWon, compWon, matchDrawn, RPS, OUTCOME} from './constants';

export const determineGameResult = (playerPick: RPS, compPick: RPS) => {
    if (playerPick === ROCK) {
        if (compPick === ROCK) return matchDrawn;
        else if (compPick === PAPER) return compWon;
        else if (compPick === SCISSOR) return playerWon;
    }
    else if (playerPick === PAPER) {
        if (compPick === ROCK) return playerWon;
        else if (compPick === PAPER) return matchDrawn;
        else if (compPick === SCISSOR) return compWon;
    }
    else if (playerPick === SCISSOR) {
        if (compPick === ROCK) return compWon;
        else if (compPick === PAPER) return playerWon;
        else if (compPick === SCISSOR) return matchDrawn;
    }
};