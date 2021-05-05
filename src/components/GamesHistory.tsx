import React from 'react';
import {useSelector} from 'react-redux';
import {getGameHistory} from '../redux/gameSlice';
import {gameObj} from '../common/modals';

import HistoryCard from './HistoryCard';

const GamesHistory = () => {
    const gameHistory = useSelector(getGameHistory);
    if (gameHistory.length > 0) {
        return (
            <div className="container shadow-2xl h-3/4 w-1/2 bg-gray-50 rounded flex flex-col justify-evenly items-center">
                {
                    gameHistory.map(
                        (game: gameObj) => <HistoryCard {...game} />
                    )
                }
            </div>
        )
    }
    else {
        return null;
    }
}

export default GamesHistory;
