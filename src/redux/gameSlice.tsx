import { createSlice } from '@reduxjs/toolkit';
import {gameState} from '../common/modals';

const initialState: gameState = {
    playerName: null,
    numOfGames: null,
    numOfGamesLeft: null,
    gameHistory: []
}

const gameSlice = createSlice(
    {
        name: 'game',
        initialState,
        reducers: {
            setPlayerName: (state: gameState, {payload}) => {
                state.playerName = payload;
            },
            setNumOfGames: (state: gameState, {payload}) => {
                state.numOfGames = payload;
                state.numOfGamesLeft = payload;
            },
            decrementNumOfGames: (state: gameState) => {
                state.numOfGamesLeft=state.numOfGamesLeft !== null? state.numOfGamesLeft - 1: null;
            },
            addGameToHistory: (state: gameState, {payload}) => {
                state.gameHistory = [...state.gameHistory, payload];
            }
        }
    }
);

export const { setPlayerName, setNumOfGames, decrementNumOfGames, addGameToHistory } = gameSlice.actions;
export default gameSlice.reducer;