import { useState } from 'react'
import { HashRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import PokeDetail from './components/PokeDetail'
import ProtectedRoutes from './components/ProtectedRoutes'
import Config from './components/Config' 



function App() {



  return (
    <div className="App">
      
      <HashRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  
 

  <Route element={<ProtectedRoutes/>}>

  <Route path='/Pokedex' element={<Pokedex/>}/>
  <Route path='/Pokedex/:id' element={<PokeDetail/>}/>
  <Route path='/Config' element={<Config/>}/>

  </Route>
</Routes>
      </HashRouter>



    </div>
  )
}

export default App
