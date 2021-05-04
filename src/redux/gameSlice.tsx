import { createSlice } from '@reduxjs/toolkit';
import {gameState} from '../utils/modals';

const initialState: gameState = {
    playerName: null,
    numberOfGames: null,
    numberOfGamesLeft: null,
    gameHistory: []
}

const gameSlice = createSlice(
    {
        name: 'game',
        initialState,
        reducers: {}
    }
);

export default gameSlice.reducer;