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
        <body className={on ? 'body':'bodyDark'}>
            
        
        <div>
            <div className='allPoke'>
                <img className='pokedex' src={pokedex} alt="" />
                <h1 className={on ? 'trainer' : 'trainerDark'} >Hello Trainer !!</h1>
                <label className={on ? 'giveMe' : "giveMeDark"}htmlFor="name">Give me your Name to Start</label>
                <div className='inpBut'>
                    <input className='inputName' required id='name' type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button className={on ? 'buttonName' : 'buttonNameDark'} onClick={() => see(inputValue)}> <h1 className={on ? 'see' : 'seeDark'}>See my pokemon</h1> </button>
                </div>
                <footer>
                    <div className={on ? 'rectangle' : 'rectangleDark'}></div>
                    <div className='rectangle1'></div>
                    <div className='elipses'>
                        <div className='elipse'><div className='elipse1'></div></div>
                    </div>
                </footer></div>
        </div>
        </body>
    );
};

export default Home;