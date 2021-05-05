import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RPS, ROCK, PAPER, SCISSOR, RPSMAP, OUTCOMEMAP, ICONS} from '../common/constants';
import {gameObj} from '../common/modals';
import {determineGameResult} from '../common/utils';
import {addGameToHistory, decrementNumOfGames, getNumOfGamesLeft} from '../redux/gameSlice';

const Playground = () => {
    const dispatch = useDispatch();
    const gamesLeft = useSelector(getNumOfGamesLeft);
    const [playerPick, setPlayerPick] = useState<RPS>(null);
    const [compPick, setCompPick] = useState<RPS>(null);
    const [result, SetResult] = useState(null);
    const [counter, setCounter] = useState(1);
    console.log(gamesLeft);
    const handleClick = async (pick: RPS) => {
        setPlayerPick(pick);
        let randInt = Math.floor(Math.random() * 3) + 1;
        setCompPick(RPSMAP[randInt.toString()]);
        const result: any = determineGameResult(pick, RPSMAP[randInt.toString()]);
        SetResult(OUTCOMEMAP[result]);
        const matchObj: gameObj = {
            id: counter,
            playerPick: pick,
            compPick: RPSMAP[randInt.toString()],
            result: result
        };
        dispatch(addGameToHistory(matchObj));
        dispatch(decrementNumOfGames());
        setCounter(counter + 1);
    };

    const resetGame = () => {
        setPlayerPick(null);
        setCompPick(null);
        SetResult(null);
    };

    return (
        <div className="container shadow-2xl h-1/3 w-1/3 rounded flex justify-evenly items-center bg-gray-50">
            {
                playerPick === null?
            <>
                <svg onClick={() => handleClick(ROCK)} className="w-10 h-10 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                <svg onClick={() => handleClick(PAPER)} className="w-10 h-10 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                <svg onClick={() => handleClick(SCISSOR)} className="w-10 h-10 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>
            </>
            :
            <div className="w-full h-full flex flex-col justify-evenly">
                <div className="flex justify-evenly items-center">
                    <div className="flex flex-col justify-center items-center">
                        <p>Your Pick</p>
                        {
                            ICONS[playerPick]
                        }
                    </div>
                    <div>
                        <h3 className="font-bold">Vs</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p>Computer's Pick</p>
                        {
                            compPick && ICONS[compPick]
                        }
                    </div>
                </div>
                <div className="flex justify-center">
                    {
                        result !== null &&
                        <p>{result}</p>
                    }
                </div>
                <div className="flex justify-center">
                    {
                        gamesLeft && gamesLeft > 0 ? 
                        <button onClick={resetGame} className="bg-gray-300 w-1/3 shadow-2xl rounded">Next round</button>
                        :
                        null
                    }
                    
                </div>
            </div>
            }
        </div>
    )
}

export default Playground;
