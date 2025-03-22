import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movies from './Components/Movies'
import TVShow from './Components/TVShows'
import People from './Components/People'
import MoviesDetails from './Components/MoviesDetails'
import TvDetails from './Components/TvDetails'
import PersonDetails from './Components/PersonDetails'

function App() {
  return (
    <div className='bg-[#1F1E24]   flex w-full h-screen  '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/movie/details/:id' element={<MoviesDetails />} />
        <Route path='/tv/details/:id' element={<TvDetails />} />
        <Route path='/people/details/:id' element={<PersonDetails />} />
        <Route path='/tvshow' element={<TVShow />}></Route>
        <Route path='/people' element={<People />}></Route>
      </Routes>
    </div>
  )
}

export default App
