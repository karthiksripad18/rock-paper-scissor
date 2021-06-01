import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RPS, ROCK, PAPER, SCISSOR, RPSMAP, OUTCOMEMAP,ICONS, LOADER} from '../common/constants';
import {gameObj} from '../common/modals';
import {determineGameResult} from '../common/utils';
import {addGameToHistory, decrementNumOfGames, getNumOfGamesLeft, getIsLoading, setIsLoading, restartGame} from '../redux/gameSlice';

const Playground = () => {
    const dispatch = useDispatch();
    const gamesLeft = useSelector(getNumOfGamesLeft);
    const isLoading = useSelector(getIsLoading);
    const [playerPick, setPlayerPick] = useState<RPS>(null);
    const [compPick, setCompPick] = useState<RPS>(null);
    const [result, SetResult] = useState(null);
    const [counter, setCounter] = useState(1);

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
        setTimeout(() => dispatch(addGameToHistory(matchObj)), 3000);
        dispatch(decrementNumOfGames());
        setCounter(counter + 1);
        dispatch(setIsLoading(true));
        setTimeout(() => dispatch(setIsLoading(false)), 2000);
    };

    const restartFullGame = () => {
        dispatch(restartGame());
        resetGame();
    }

    const resetGame = () => {
        setPlayerPick(null);
        setCompPick(null);
        SetResult(null);
    };

    return (
        <div className="container shadow-2xl h-1/3 w-1/3 rounded bg-gray-50">
            {
                playerPick === null?
            <div className="flex flex-col h-full items-center justify-evenly">
                <div>
                    <h3 className="font-bold">Select your pick</h3>
                </div>
                <div className="flex justify-evenly w-full">
                    <div className="cursor-pointer" onClick={() => handleClick(ROCK)}>
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" x="0" y="0" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve"><path d="M404.765 411.677L383.849 286.25a10.793 10.793 0 00-2.979-5.792l-39.542-39.542v-38.25a10.66 10.66 0 00-3.125-7.542l-62.771-62.781L212.203 5.895A10.71 10.71 0 00205.39.353c-2.917-.781-6.083-.25-8.646 1.438l-64 42.667a10.709 10.709 0 00-4.542 6.781L107.89 152.791l-38 19a10.691 10.691 0 00-5.896 9.542v59.583l-39.542 39.542a10.524 10.524 0 00-3.063 6.479L.057 500.27c-.313 3 .667 5.99 2.688 8.219a10.651 10.651 0 007.917 3.51h448a10.671 10.671 0 008.542-17.063l-62.439-83.259zM22.453 490.666l19.771-197.813 32.436-32.436 30.46 30.467-19.25 57.74a10.645 10.645 0 001.25 9.292l42.667 64a10.661 10.661 0 0014.792 2.958c4.896-3.271 6.229-9.885 2.958-14.792l-39.771-59.656 19.688-59.052a10.69 10.69 0 00-2.583-10.917l-39.542-39.542v-52.99L122.1 169.54c.143-.072.223-.221.362-.299.109-.061.238-.031.346-.096l48.313-28.99 37.438 18.719c5.292 2.615 11.667.521 14.313-4.771 2.625-5.271.5-11.677-4.771-14.313l-42.667-21.333c-3.271-1.635-7.167-1.49-10.25.396l-32.671 19.602 15.733-78.695 50.271-33.521 58.604 117.198a10.95 10.95 0 002 2.771l60.875 60.875v32.542l-59.25 39.5a10.675 10.675 0 00-4.208 12.25l21.333 64a10.694 10.694 0 0010.125 7.292c1.125 0 2.25-.177 3.375-.552 5.583-1.854 8.604-7.896 6.75-13.49l-18.771-56.271 49.953-33.297 34.068 34.068L384.14 417.75a10.563 10.563 0 001.979 4.646l51.208 68.271H22.453zM405.328 309.333c0 4.042 2.292 7.729 5.896 9.542l42.667 21.333c1.5.75 3.125 1.125 4.771 1.125 1.375 0 2.771-.271 4.083-.813a10.71 10.71 0 006.042-6.479l21.333-64a10.69 10.69 0 00-2.583-10.917l-21.333-21.333a10.642 10.642 0 00-12.313-2l-42.667 21.333a10.691 10.691 0 00-5.896 9.542v42.667zm21.333-36.073l29.896-14.948 11.229 11.24-15.354 46.073-25.771-12.885v-29.48zM508.87 387.125l-21.333-21.333c-2-2-4.708-3.125-7.542-3.125h-21.333a10.66 10.66 0 00-10.667 10.667V416a10.66 10.66 0 003.125 7.542l21.333 21.333a10.643 10.643 0 007.542 3.125c.563 0 1.146-.042 1.708-.135a10.72 10.72 0 007.833-5.76l21.333-42.667a10.648 10.648 0 00-1.999-12.313zm-31.792 32.198l-7.75-7.74V384h6.25l12.771 12.771-11.271 22.552zM342.453 164.77a10.671 10.671 0 009.542 5.896h21.333c4.042 0 7.729-2.281 9.542-5.896l21.333-42.667a10.648 10.648 0 00-2-12.313L380.87 88.458c-4.167-4.167-10.917-4.167-15.083 0l-18.208 18.208h-16.917a10.713 10.713 0 00-9.083 5.063 10.694 10.694 0 00-.458 10.375l21.332 42.666zm9.542-36.77a10.66 10.66 0 007.542-3.125l13.792-13.792 8.354 8.354-14.938 29.896h-8.167L347.911 128h4.084z"></path></svg>
                        <p className="font-bold">Rock</p>
                    </div>
                    <div className="cursor-pointer" onClick={() => handleClick(PAPER)}>
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" x="0" y="0" enableBackground="new 0 0 480 480" version="1.1" viewBox="0 0 480 480" xmlSpace="preserve"><path d="M160 344h-16a8 8 0 000 16h16a8 8 0 000-16zM384 344H192a8 8 0 000 16h192a8 8 0 000-16zM160 296h-16a8 8 0 000 16h16a8 8 0 000-16zM384 296H192a8 8 0 000 16h192a8 8 0 000-16zM160 248h-16a8 8 0 000 16h16a8 8 0 000-16zM384 248H192a8 8 0 000 16h192a8 8 0 000-16zM160 200h-16a8 8 0 000 16h16a8 8 0 000-16zM384 200H192a8 8 0 000 16h192a8 8 0 000-16zM160 152h-16a8 8 0 000 16h16a8 8 0 000-16zM384 152H192a8 8 0 000 16h192a8 8 0 000-16z"></path><path d="M439.896 119.496a7.557 7.557 0 00-.408-2.056c-.088-.256-.152-.504-.264-.752a7.998 7.998 0 00-1.6-2.344l-112-112a7.998 7.998 0 00-2.344-1.6c-.248-.112-.496-.176-.744-.264a7.967 7.967 0 00-2.072-.416C320.328.088 320.176 0 320 0H96a8 8 0 00-8 8v24H48a8 8 0 00-8 8v432a8 8 0 008 8h336a8 8 0 008-8v-40h40a8 8 0 008-8V120c0-.176-.088-.328-.104-.504zM328 27.312L412.688 112H328V27.312zM376 464H56V48h32v376a8 8 0 008 8h280v32zm48-48H104V16h208v104a8 8 0 008 8h104v288z"></path><path d="M192 72h-48a8 8 0 00-8 8v48a8 8 0 008 8h48a8 8 0 008-8V80a8 8 0 00-8-8zm-8 48h-32V88h32v32z"></path></svg>
                        <p className="font-bold">Paper</p>
                    </div>
                    <div className="cursor-pointer" onClick={() => handleClick(SCISSOR)}>
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" x="0" y="0" enableBackground="new 0 0 511.998 511.998" version="1.1" viewBox="0 0 511.998 511.998" xmlSpace="preserve"><path d="M106.342 266.716c-6.611-6.61-15.4-10.251-24.749-10.251s-18.138 3.641-24.748 10.251c-6.611 6.61-10.252 15.399-10.252 24.748s3.641 18.139 10.251 24.748c6.61 6.611 15.4 10.251 24.749 10.251s18.138-3.641 24.748-10.251c6.61-6.61 10.251-15.399 10.251-24.749 0-9.349-3.641-18.138-10.25-24.747zm-14.143 35.355a14.901 14.901 0 01-10.606 4.393c-4.006 0-7.773-1.56-10.607-4.394a14.897 14.897 0 01-4.393-10.605 14.9 14.9 0 014.394-10.606 14.902 14.902 0 0110.606-4.394c4.006 0 7.773 1.56 10.606 4.394a14.897 14.897 0 014.393 10.605c0 4.007-1.56 7.773-4.393 10.607z"></path><path d="M509.015 133.452a10.002 10.002 0 00-9.882-2.461l-168.392 50.26 50.261-168.392a9.996 9.996 0 00-2.462-9.881 10.005 10.005 0 00-9.846-2.601l-43.658 12.366a9.997 9.997 0 00-6.389 5.508L231.738 210.8l-88.673 26.466c-20.645-24.538-53.972-34.731-85.176-25.415C15.06 224.635-9.385 269.879 3.398 312.709c10.484 35.126 42.802 57.886 77.716 57.886a80.83 80.83 0 0023.143-3.394c29.942-8.937 51.731-34.055 56.782-64.247l43.711 4.289 4.289 43.71c-30.192 5.05-55.311 26.839-64.249 56.782-12.783 42.83 11.663 88.075 54.492 100.858a81.126 81.126 0 0023.212 3.405c17.091 0 34.128-5.596 47.974-15.756 14.32-10.508 24.581-25.08 29.673-42.14 9.313-31.204-.878-64.531-25.416-85.176l26.466-88.672 192.551-86.909a9.998 9.998 0 005.507-6.389l12.366-43.657a10 10 0 00-2.6-9.847zm-306.12 141.25a9.992 9.992 0 00-.838 5.09l.702 7.158-49.673-4.872a9.997 9.997 0 00-10.971 9.6c-.921 26.205-18.434 48.854-43.578 56.358-32.266 9.629-66.346-8.786-75.975-41.047-9.628-32.263 8.785-66.344 41.048-75.974 25.29-7.549 52.427 1.906 67.527 23.526a10.002 10.002 0 0011.058 3.855l78.656-23.477-17.956 39.783zm50.699 95.094a10 10 0 003.856 11.057 60.963 60.963 0 0123.527 67.528c-7.665 25.68-31.714 43.616-58.483 43.616-5.895 0-11.78-.865-17.492-2.569-32.262-9.629-50.676-43.711-41.047-75.974 7.505-25.145 30.154-42.658 56.359-43.579a9.999 9.999 0 007.174-3.408 9.979 9.979 0 002.068-3.798 10.3 10.3 0 00.404-.893l23.889-61.474c2-5.148-.551-10.942-5.699-12.943-5.149-2.003-10.943.551-12.943 5.699l-9.383 24.145-3.601-36.707 112.74-249.779 21.669-6.138-103.038 345.217zm227.68-192.767L308.76 254.895l15.142-50.731 163.51-48.802-6.138 21.667z"></path><path d="M247.206 406.197c-6.61-6.61-15.399-10.25-24.748-10.25s-18.138 3.64-24.748 10.251c-6.611 6.61-10.251 15.399-10.251 24.748s3.64 18.138 10.251 24.748c6.61 6.611 15.399 10.251 24.748 10.251s18.138-3.64 24.749-10.251c13.645-13.646 13.645-35.85-.001-49.497zm-14.14 35.355a14.906 14.906 0 01-10.607 4.394 14.91 14.91 0 01-10.607-4.393c-2.832-2.833-4.393-6.6-4.393-10.606s1.561-7.773 4.393-10.606a14.902 14.902 0 0110.607-4.393c4.007 0 7.774 1.56 10.607 4.393 5.847 5.847 5.847 15.363 0 21.211zM259.025 259.351c-5.151-1.997-10.943.559-12.939 5.709l-.117.302c-1.997 5.149.56 10.942 5.709 12.938 1.188.46 2.41.679 3.612.679 4.008 0 7.791-2.427 9.326-6.388l.117-.302c1.997-5.149-.559-10.941-5.708-12.938z"></path></svg>
                        <p className="font-bold">Scissor</p>
                    </div>
                </div>
            </div>
            :
            <div className="w-full h-full flex flex-col justify-evenly">
                <div className="flex justify-evenly items-center">
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold mb-2">Your Pick</p>
                        {
                            ICONS[playerPick]
                        }
                    </div>
                    <div>
                        <h3 className="font-bold">Vs</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold mb-2">Computer's Pick</p>
                        {
                            isLoading ? LOADER:compPick && ICONS[compPick]
                        }
                    </div>
                </div>
                <div className="flex justify-center">
                    {
                        !isLoading && result !== null &&
                        <p className="font-bold">{result}</p>
                    }
                </div>
                <div className="flex justify-center">
                    {
                        !isLoading && gamesLeft && gamesLeft > 0 ? 
                        <button onClick={resetGame} className="bg-gray-300 w-1/3 shadow-2xl rounded">Next round</button>
                        :
                        !isLoading && gamesLeft === 0?
                        <button onClick={() => restartFullGame()} className="bg-gray-300 w-1/3 shadow-2xl rounded">Restart Game</button>
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
