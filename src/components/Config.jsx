import React from 'react';
import { useDispatch } from 'react-redux';
import { number } from '../store/slices/listNumber.slice';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import bombon from '../assets/on.png'
import on from '../store/slices/on.slice'
import { useState } from 'react';


const Config = () => {
  const navigate= useNavigate()
    const dispatch= useDispatch()
  const[cambioNom, setCambioNom]=useState('')


    const quantities=[4,8,12,16,20]
    const ver=(e)=>{
       const newNumberList = e.target.value
       dispatch(number(newNumberList))
    }

    const back2=()=>{
        navigate('/Pokedex')
    }

   


    return (
        <div className='seti'>

<div className='set'>
                <div className='elipsesCardc'>
                <div className='elipseCardc'> <button onClick={back2} className='buttonElipsec'><i class="fa-solid fa-circle-left fa-4x"style={{color:'red'}}></i></button></div>
                </div>
                
               
                

          <h1>Change Pokemon's Quantities per Page?</h1>
          <select className='selectConfig' onChange={ver} name="" id="">
                    { quantities.map((quantity)=>(

<option value={quantity} key={quantity} >{quantity}</option>

                    ))               }

    
                </select>
                </div>
        </div>
    );
};

export default Config;


