import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Game from './components/Game';

function App() {
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/game"><Game /></Route>
      </Switch>
    </div>
  );
}

export default App;
