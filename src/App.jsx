import React from 'react'
import Calculator from './Calculator'
import Results from './Results'


const App = () => {
  return (
    <>
    <div className="flex lg:flex-row flex-col">
      <Calculator />
      <Results />
      </div>
    </>
  )
}

export default App
