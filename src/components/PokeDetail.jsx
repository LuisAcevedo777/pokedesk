import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import '../App.css/'
import pokedex from '../assets/pokedex.png';
import pn from '../assets/pngegg.png'

const PokeDetail = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [uniquePoke, setUniquePoke] = useState({})

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setUniquePoke(res.data))
    }, [])

    let movements = []
console.log(uniquePoke)

    movements = uniquePoke.moves
    const back = () => {
        navigate('/Pokedex')
    }
    return (
        <div>
            <header className='headRec'>
                <img className='imgPokedexD' src={pokedex} alt="" />
                <div className='rectangleCardD'></div>
                <div className='rectangleCard1D'></div>
                <div className='elipsesCardD'>
                    <div className='elipseCardD'> <button onClick={back} className='buttonElipse'><i class="fa-solid fa-circle-left fa-4x" style={{ color: 'red' }}></i></button></div>
                </div>
            </header>


            <div className='dividedLine'></div>

            <nav className='nav'>
                <nav className='totalDetail'>
                    <div className='imgContainer'><img className='imgHead' src={uniquePoke.sprites?.front_shiny} alt="" /></div>

                    <div className='containerDetail'>
                        <div className='headhead'>
                            <div className='idPoke'>#{uniquePoke.id}</div>
                            <div className='allName'><div className='line1'></div> <div className='namePoke'>{uniquePoke.name}</div><div className='line2'></div></div>
                            <div className='adicionalAll'>  <div className='peso'><h2 className='t'>weight</h2><div className='wDate'>{uniquePoke.weight}</div> </div>   <div className='tall'><h2 className='t'></h2>height <div className='wDate'>{uniquePoke.weight}</div></div>     </div>
                        </div>
                        <nav className='dateTwo'>
                            <div className='right_left'>
                                <div className='rl'>  <div className='tskill'>Types</div> <div className='tsk12'>  <div className='t1'>{uniquePoke.types?.[0]?.type.name}</div> <div className='t2'>{uniquePoke.types?.[1]?.type.name}</div>                   </div></div>

                                <div className='rl'>  <div className='tskill'>Abilities </div> <div className='tsk12'>  <div className='sk1'>{uniquePoke?.abilities?.[0]?.ability.name}</div> <div className='sk2'>{uniquePoke?.abilities?.[1]?.ability.name}</div>         </div></div></div>

                            <article className='article'>
                                <div className='lineOne' ><h1 className='statsName'>Stats</h1><div className='statLine'></div><img className='pokeIm' src={pn} alt="" /></div>

                                <div className='toFile'>
                                    <div className='toColumn'>
                                        <label htmlFor="file">{uniquePoke.stats?.[0].stat.name}:</label>
                                        <progress className='progress' id="file" max="150" value={uniquePoke.stats?.[0].base_stat}> {uniquePoke.stats?.[0].base_stat} </progress></div>
                                    <div className='orderRow'><p>{uniquePoke.stats?.[0].base_stat}</p>/<p>150</p></div></div>

                                <div className='toFile'>
                                    <div className='toColumn'>
                                        <label htmlFor="file">{uniquePoke.stats?.[1].stat.name}:</label>
                                        <progress className='progress' id="file" max="150" value={uniquePoke.stats?.[1].base_stat}>{uniquePoke.stats?.[1].base_stat} </progress></div>
                                    <div className='orderRow'><p>{uniquePoke.stats?.[1].base_stat}</p>/<p>150</p></div></div>

                                <div className='toFile'>
                                    <div className='toColumn'>
                                        <label htmlFor="file">{uniquePoke.stats?.[2].stat.name}:</label>
                                        <progress className='progress' id="file" max="150" value={uniquePoke.stats?.[2].base_stat}> {uniquePoke.stats?.[2].base_stat}  </progress></div>
                                    <div className='orderRow'><p>{uniquePoke.stats?.[2].base_stat}</p>/<p>150</p></div></div>

                                <div className='toFile'>
                                    <div className='toColumn'>
                                        <label htmlForr="file">{uniquePoke.stats?.[3].stat.name}:</label>
                                        <progress className='progress' id="file" max="150" value={uniquePoke.stats?.[3].base_stat}>{uniquePoke.stats?.[3].base_stat}  </progress></div>
                                    <div className='orderRow'><p>{uniquePoke.stats?.[3].base_stat}</p>/<p>150</p></div></div>

                                <div className='toFile'>
                                    <div className='toColumn'>
                                        <label htmlFor="file">{uniquePoke.stats?.[4].stat.name}:</label>
                                        <progress className='progress' id="file" max="150" value={uniquePoke.stats?.[4].base_stat}> {uniquePoke.stats?.[4].base_stat}  </progress></div>
                                    <div className='orderRow'><p>{uniquePoke.stats?.[4].base_stat}</p>/<p>150</p></div></div>

                                <div className='toFile'>
                                    <div className='toColumn'>
                                        <label htmlFor="file">{uniquePoke.stats?.[5].stat.name}:</label>
                                        <progress className='progress' id="file" max="150" value={uniquePoke.stats?.[5].base_stat}>150 </progress></div>
                                    <div className='orderRow'><p>{uniquePoke.stats?.[5].base_stat}</p>/<p>150</p></div></div>

                            </article>


                        </nav>


                    </div>
                    <div className='dividedLine2'></div>


                    <article className='article2'>


                        <div className='lineOne' ><h1 className='statsName'>Movements</h1><div className='statLine'></div><img className='pokeIm' src={pn} alt="" /></div>
                        <nav className='moveP'>
                            <div className='uni'>
                                {movements?.map(move => (

                                    <div key={move.url} className='move'>{move.move.name}</div>

                                ))}

                            </div>




                        </nav>


                    </article>

                </nav>
            </nav>

        </div>
    );
};

export default PokeDetail;