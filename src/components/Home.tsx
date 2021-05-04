import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setPlayerName, setNumOfGames} from '../redux/gameSlice';

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('');
    const [rounds, setRounds] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(setPlayerName(name));
        dispatch(setNumOfGames(parseInt(rounds)));
        history.push(`/game`);
    };

    return (
        <div className="rounded w-1/3 bg-gray-50 shadow-2xl">
            <form className="m-4 flex flex-col justify-center items-center">
                <div>
                    <label>Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="John Doe" className="w-1/2 p-2 m-4 ml-6 border-2 rounded" />
                </div>
                <div className="flex flex-row justify-center items-center">
                    <label>Rounds</label>
                    <input onChange={(e) => setRounds(e.target.value)} value={rounds} type="number" placeholder="3" className="w-1/2 p-2 m-4 border-2 rounded" />
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <button disabled={name === '' || rounds === '' || rounds === '0'} onClick={(e) => handleSubmit(e)} className="w-1/3 bg-gray-300 p-2 mb-2 rounded">Start Game!!</button>
            </form>
        </div>
    )
}

export default Home;
