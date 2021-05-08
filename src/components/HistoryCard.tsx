import React from 'react';

import {OUTCOMEMAP, ICONS} from '../common/constants';
import {gameObj} from '../common/modals';

const HistoryCard = ({id, playerPick, compPick, result}: gameObj) => {
    return (
        <div className="m-2 w-3/4 h-1/5 rounded shadowed-2xl bg-gray-300 flex flex-col justify-evenly items-center">
            <div><p>{OUTCOMEMAP[result]}</p></div>
            <div className="w-full flex justify-evenly">
                {
                    playerPick && ICONS[playerPick]
                } 
                <p>vs</p>
                {
                    compPick && ICONS[compPick]
                } 
            </div>
        </div>
    )
}

export default HistoryCard;
