
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PokemonCard = ({ url }) => {


    const on = useSelector(state=> state.on)
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()
    const [color, setColor] = useState('')


    useEffect(() => {

        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])





    /*
    const[ty, setTy]=useState([])
      axios.get(url)
        .then(res=> setTy(res.data.types[0].type.name))
        changeColor(ty)
    
    
    const colors={
    
        grass: 'linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)',
        fair: 'linear-gradient(176.37deg, #F96D6F -32.26%, #E35825 22.55%, #E8AE1B 125.72%)',
        water: "linear-gradient(179.57deg, #133258 -70.14%, #1479FB 56.16%, #82B2F1 214.85%)",
        normal: "linear-gradient(181.51deg, #735259 -6.44%, #BC6B7C 121.95%, #7C3F4C 186.11%)",
        fighting: "linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)",
        poison: "linear-gradient(177.03deg, #5B3184 -11.97%, #A564E3 71.28%, #CE9BFF 135.64%)",
        rock: "linear-gradient(177.03deg, #7E7E7E -11.97%, #8D8D94 57.49%, #D3D3D3 135.64%)",
        dark: " linear-gradient(177.03deg, #030706 -11.97%, #0D1211 57.49%, #5A5E5D 135.64%)",
        ice: "linear-gradient(177.03deg, #6FBEDF -11.97%, #64CBF5 47.77%, #BDEBFE 136.72%)",
        steel: "linear-gradient(179.75deg, #5E736C -19.96%, #728881 43.67%, #A8A8A8 138.4%)",
    dragon: "linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)",
    magic: "linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)",
    electric: "linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)",
    ground: "linear-gradient(179.75deg, #654008 -19.96%, #895C1A 43.67%, #D69638 138.4%)",
    ghostpoison: "linear-gradient(177.03deg, #323569 -11.97%, #454AA8 57.49%, #787DDA 135.64%)",
    bug: "linear-gradient(177.56deg, #62DB60 -58.92%, #3BB039 16.57%, #AAFFA8 209.53%)"
    }
    
    
    
    const changeColor=(ty)=>{
                
             if(ty==='normal'){
            setColor(colors.normal)
             } else if(ty==="grass"){setColor(colors.grass)}
                else if(ty==="fire"){setColor(colors.fair)}
                else if(ty==="water"){setColor(colors.water)}
                else if(ty==="bug"){setColor(colors.bug)}
                else if(ty==="fighting"){setColor(colors.fighting)}
                else if(ty==="poison"){setColor(colors.poison)}
                else if(ty==="ghost"){setColor(colors.ghost)}
                else if(ty==="rock"){setColor(colors.rock)}
                else if(ty==="dark"){setColor(colors.dark)}
                else if(ty==="ice"){setColor(colors.ice)}
                else if(ty==="ground"){setColor(colors.ground)}
                else if(ty==="steel"){setColor(colors.steel)}
                else if(ty==="electric"){setColor(colors.electric)}
                else if(ty==="dragon"){setColor(colors.dragon)}
                else if(ty==="fairy"){setColor(colors.magic)}
                else if(ty==="steel"){setColor(colors.steel)}
                else setColor(colors.red)
            }*/


    return (

            <div style={{ background: color }} className='principalCard'>
                <div style={{ background: color }} className='card_containerP' onClick={() => navigate(`/Pokedex/${pokemon.id}`)}>
                   
                        <img className='pokeImage' src={pokemon.sprites?.front_default} alt="" />
                        <div className='pokehead'>
                            <h1 className='pokemonName'>{pokemon.name}</h1>
                            <p className='pokemonType'>{pokemon.types?.[0].type?.name}</p>
                            <p className='typeName'>Type</p></div>
                    </div>
                    <div className='stats'>
                        <div className='stat'> <span className='stat1'>{pokemon.stats?.[0].stat.name}</span><span className='stat2'>{pokemon.stats?.[0].base_stat}</span></div>
                        <div className='stat'><span className='stat1'>{pokemon.stats?.[1].stat.name}</span><span className='stat2'>{pokemon.stats?.[1].base_stat}</span></div>
                        <div className='stat'><span className='stat1'>{pokemon.stats?.[2].stat.name}</span><span className='stat2'>{pokemon.stats?.[2].base_stat}</span></div>
                        <div className='stat'> <span className='stat1'>{pokemon.stats?.[3].stat.name}</span><span className='stat2'>{pokemon.stats?.[3].base_stat}</span></div>
                        <div className='stat'><span className='stat1'>{pokemon.stats?.[4].stat.name}</span><span className='stat2'>{pokemon.stats?.[4].base_stat}</span></div>
                        <div className='stat'><span className='stat1'>{pokemon.stats?.[5].stat.name} </span><span className='stat2'>{pokemon.stats?.[5].base_stat}</span></div>
                    
                </div>

            </div>
    );
};

export default PokemonCard;


