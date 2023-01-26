import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import { Link } from 'react-router-dom';
import '../App.css'
import pokedex from '../assets/pokedex.png'
import conf from '../assets/config.png'

const Pokedex = () => {
    const navigate = useNavigate()
    const userName = useSelector(state => state.name)
    const listNumber = useSelector(state => state.number)
    const on = useSelector(state=>state.on)

    const [pokemonList, setPokemonList] = useState([])
    const [search, setSearch] = useState("")
    const [type, setType] = useState([])


    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279`)
            .then(res => setPokemonList(res.data.results))
            .catch(() => alert('Ese pokemon no existe!!'))

        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setType(res.data.results))
    }, [])



    const catched = () => {
        navigate(`/pokedex/${search.toLowerCase()}`)
    }
    const filter = (e) => {

        axios.get(e.target.value)
            .then(res => setPokemonList(res.data.pokemon))

    }
    //PAGINATION

    const [page, setPage] = useState(1)
    const pokemonsPerPage = listNumber
    const lastIndex = page * pokemonsPerPage
    const firstIndex = lastIndex - pokemonsPerPage
    const pokemonsPaginated = pokemonList?.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(pokemonList.length / pokemonsPerPage)
    const pages = []
    for (let i = 1; i <= totalPages; i++) {

        pages.push(i)
    }
    const back1 = () => {
        navigate('/')
    }
    console.log(pokemonList)
    console.log(pokemonsPaginated)
    return (
        <body className={on ? 'body' : 'bodyDark'}>
        <div>
            
     
            <header>
                <div className='header'>
                    <img className='imgPokedex' src={pokedex} alt="" />
                    <div  className= {on ? "rectangleCard" : "rectangleCardDark"}></div>
                    <div className='rectangleCard1'></div>
                    <div className='elipsesCard'>
                        <div className='elipseCard'><button onClick={back1} className='buttonElipse'><i className="fa-solid fa-circle-left fa-4x" style={on ? { color: 'red' }:{ color: '#66c0e6' }}></i></button></div>
                    </div></div>
            </header>

            <div className='welInpuType'>
                <div className='welwel'><h1 className={on ? "wel" : "welDark"}>Welcome! {userName},</h1><p className= {on ? "welcome" : "welcomeDark"}>  Here you can find you favorite pokemon!!</p></div>
                <div className='inpuType'>
                    <div className='cardImported'> 
                        <input className={on ? "inputChange" : "inputChangeDark"} type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button className={on ? "buttonChanged" : "buttonChangedDark"} onClick={catched}> <p className={on ? "buttoni" : "buttoniDark"}> Catch My Pokemon</p></button>
                    </div>
                    <Link to={'/config'}> <img title='setting' className='link' src={conf} alt="setting" /> </Link>
                    <div className='type'> <h2>Choose your POKEMON type :</h2>
                        <select className={on ? "select-css" : "select-cssDark"} onChange={filter} name="" id="">
                            {type.map((tapey) => (

                                <option value={tapey.url} key={tapey.url} >{tapey.name}</option>
                            ))

                            }
                        </select>

                    </div>
                </div>
            </div>

            <div className='dividedLine'></div>
            <nav className='bodyCard'>
                {
                    pokemonsPaginated.map(pokemon => (



                        <PokemonCard
                            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        />



                    ))

                }</nav>



            <footer>
                <div className="buttonContainer">
                    {pages.map(number => <button className={on ? "paginationButton" : "paginationButtonDark"} key={number} onClick={() => setPage(number)}> <h3 className={on ? "chercherNumber" : "chercherNumberDark"}> {number}</h3></button>)}

                </div>                        
                <div className='buttons'> <button onClick={() => setPage(page - 1)} disabled={page === 1}><i class="fa-solid fa-chevron-left fa-4x"></i></button>
                    {page}/{totalPages}
                    <button onClick={() => setPage(page + 1)} disabled={page === totalPages}><i class="fa-solid fa-chevron-right fa-4x"></i></button>
                </div>



            </footer>

           
        </div> </body>
    );
};

export default Pokedex;