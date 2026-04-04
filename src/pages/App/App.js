import GameDetails from './GameDetails'
import CowMania from './CowMania'
import ComingSoon from './ComingSoon'
import RewardModal from '../../components/RewardModal/RewardModal'
import './App.css'
import { useState, useContext, createContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import './App.css'

export const SessionContext = createContext(null)
function App() {
  const [winCondition, setWinCondition] = useState(false)
  const [farmFood, setFarmFood] = useState(0)
  const [userResult, setUserResult] = useState()
  return (
    <SessionContext.Provider
      // State variables and setState functions usable by any component (with proper SessionContext and useContext imports).
      value={{
        farmFood,
        setFarmFood,
        userResult,
        setUserResult,
        winCondition,
        setWinCondition
      }}
    >
      <>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gamedetails" element={<GameDetails />} />
            <Route path="/cowmania" element={<CowMania />} />
            <Route path="/winscreen" element={<RewardModal />} />
            {/* Sends anyone that clinks on a link in progress, or route that doesnt exist, to a coming soon page */}
            <Route path="/*" element={<ComingSoon />} />
          </Routes>
        </div>
      </>
    </SessionContext.Provider>
  )
}

export default App
