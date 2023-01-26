import React from 'react';
import { useDispatch } from 'react-redux';
import { number } from '../store/slices/listNumber.slice';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import bombon from '../assets/on.png'
import {ono} from '../store/slices/on.slice'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import bombof from '../assets/off.png'


const Config = () => {
  const navigate= useNavigate()
    const dispatch= useDispatch()
 
    const on = useSelector(state=> state.on)

    const quantities=[4,8,12,16,20]
    const ver=(e)=>{
       const newNumberList = e.target.value
       dispatch(number(newNumberList))
    }

    const back2=()=>{
        navigate('/Pokedex')
    }

   


    return (
        <body className={on ? 'body' : "bodyDark"}>
        <div className='seti'>

<div className='set'>
                <div className='elipsesCardc'>
                <div className='elipseCardc'> <button onClick={back2} className='buttonElipsec'><i class="fa-solid fa-circle-left fa-4x"style={ on ?{color:'red'} :{ color: '#66c0e6'}}></i></button></div>
                </div>
                
               <h2>On/Off</h2>
               <button onClick={()=>dispatch(ono())} className='encender'><img className='bombon' src={on ? bombon :bombof} alt="" /></button>

          <h1 className={on ? 'perPage' : 'perPageDark'}>Change Pokemon's Quantities per Page?</h1>
          <select className='selectConfig' onChange={ver} name="" id="">
                    { quantities.map((quantity)=>(

<option value={quantity} key={quantity} >{quantity}</option>

                    ))               }

    
                </select>
                </div>
                
                
        </div></body>
    );
};

export default Config;


