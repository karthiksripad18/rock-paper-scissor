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
            setPlayerName: (state, action) => {
                state.playerName = action.payload;
            },
            setNumOfGames: (state, action) => {
                state.numOfGames = action.payload;
                state.numOfGamesLeft = action.payload;
            },
            decrementNumOfGames: (state, action) => {
                state.numOfGamesLeft=state.numOfGamesLeft !== null? state.numOfGamesLeft - 1: null;
            },
            addGameToHistory: (state, action) => {
                state.gameHistory = [...state.gameHistory, action.payload];
            }
        }
    }
);

export const { setPlayerName, setNumOfGames, decrementNumOfGames, addGameToHistory } = gameSlice.actions;
export default gameSlice.reducer;