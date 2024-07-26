import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ChampionList from './components/ChampionList'
import Navbar from './components/Navbar'
import ChampionDetails from './components/ChampoinDetails'
import Search from './components/Search'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/champions' element={<ChampionList />} />
        <Route path='/champions/:id' element={<ChampionDetails />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </>
  )
}

export default App
