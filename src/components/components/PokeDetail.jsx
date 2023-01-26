import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import '../App.css/'
import pokedex from '../assets/pokedex.png';
import pn from '../assets/pngegg.png'
import { useSelector } from 'react-redux';

const PokeDetail = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [uniquePoke, setUniquePoke] = useState({})
   const on = useSelector(state=> state.on)


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
        <html className={on ? 'html' : "htmlDark"}>
    <body className={on ? 'body1' : "bodyDark1"}>
        
       
        <div className='pullBody'>
            <header className='headRec'>
                <img className='imgPokedexD' src={pokedex} alt="" />
                <div className={on ? "rectangleCardD" : "rectangleCardDDark"}></div>
                <div className='rectangleCard1D'></div>
                <div className='elipsesCardD'>
                    <div className='elipseCardD'> <button onClick={back} className='buttonElipse'><i class="fa-solid fa-circle-left fa-4x" style={ on ?  { color: 'red' } :{ color: '#66c0e6' }}></i></button></div>
                </div>
            </header>
            

            <div className='dividedLine'></div>

            <nav className=   {on ? "nav" : "navDark"}>
                
                <nav className= {on ? "totalDetail" : "totalDetailDark"}>
                    <div className={on ? 'imgContainer' :'imgContainerDark' }><img className='imgHead' src={uniquePoke.sprites?.front_shiny} alt="" /></div>

                    <div className='containerDetail'>
                        <div className='headhead'>           {on ? "" : ""}   
                                        <div className='idPoke'>#{uniquePoke.id}</div>
                                                 <div className='allName'><div className='line1'></div> <div className= {on ? "namePoke" : "namePokeDark"} >{uniquePoke.name}</div><div className='line2'></div></div>
                            <div className='adicionalAll'>  <div className='peso'><h2 className='t'>weight</h2><div className= {on ? "wDate" : "wDateDark"}>{uniquePoke.weight}</div> </div>   <div className='tall'><h2 className='t'></h2>height <div className='wDate'>{uniquePoke.weight}</div></div>     </div>
                        </div>
                        <nav className='dateTwo'>
                            <div className='right_left'>
                                <div className='rl'>  <div className={on ? "tskill" : "tskillDark"} >Types</div> <div className='tsk12'>  <div className='t1'>{uniquePoke.types?.[0]?.type.name}</div> <div className='t2'>{uniquePoke.types?.[1]?.type.name}</div>                   </div></div>

                                <div className='rl'>  <div className={on ? "tskill" : "tskillDark"} >Abilities </div> <div className='tsk12'>  <div className= {on ? "sk1" : "sk1Dark"}>{uniquePoke?.abilities?.[0]?.ability.name}</div> <div className='sk2'>{uniquePoke?.abilities?.[1]?.ability.name}</div>         </div></div></div>

                            <article className={on ? "article" : "articleDark"}>
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
                    

                    <article className={on ? "article2" : "article2Dark"}>


                        <div className='lineOne' ><h1 className={on ? "statsName" : "statsNameDark"}>Movements</h1><div className='statLine'></div><img className='pokeIm' src={pn} alt="" /></div>
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
        </body></html>
    );
};

export default PokeDetail;