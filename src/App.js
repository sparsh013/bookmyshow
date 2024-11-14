import React from 'react'
import Home from './pages/Home'
import BsState from './Context/BsState'

const App = () => {
  return (
    <div>
      <BsState>
        <Home/>
      </BsState>
    </div>
  )
}

export default App
