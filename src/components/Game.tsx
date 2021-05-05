import React from 'react';

import Playground from './Playground';
import GameHistory from './GamesHistory';

const Game = () => {
    return (
        <div className="w-full h-full flex">
            <div className="w-3/4 h-full flex justify-center items-center">
                <Playground />
            </div>
            <div className="w-1/4 h-full flex justify-center items-center">
                <GameHistory />
            </div>
        </div>
    )
}

export default Game;
