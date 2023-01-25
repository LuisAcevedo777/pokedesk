import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userName } from '../store/slices/name.slice';
import { useState } from 'react';
import pokedex from '../assets/image11.svg'
import '../App.css'
import { useSelector } from 'react-redux'

const Home = () => {

    const on = useSelector(state => state.on)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')


    const see = (inputValue) => {

        if (inputValue !== '') {
            dispatch(userName(inputValue))
            navigate('/Pokedex')
        }

    }
    return (
        <div>
            <div className='allPoke'>
                <img className='pokedex' src={pokedex} alt="" />
                <h1 className='trainer'  >Hello Trainer !!</h1>
                <label className='giveMe' htmlFor="name">Give me your Name to Start</label>
                <div className='inpBut'>
                    <input className='inputName' required id='name' type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button className='buttonName' onClick={() => see(inputValue)}> <h1 className='see'>See my pokemon</h1> </button>
                </div>
                <footer>
                    <div className='rectangle'></div>
                    <div className='rectangle1'></div>
                    <div className='elipses'>
                        <div className='elipse'><div className='elipse1'></div></div>
                    </div>
                </footer></div>
        </div>
    );
};

export default Home;