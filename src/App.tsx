import React from 'react';
import './App.css';

import { useDispatch } from 'react-redux';
import {setPlayerName, setNumOfGames, decrementNumOfGames, addGameToHistory} from './redux/gameSlice';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
    </div>
  );
}

export default App;
