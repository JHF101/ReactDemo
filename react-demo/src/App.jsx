import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Debugger from './components/debug';
import Categories from './components/categories';

// Environment is not working so doing hardcoded config

// Run command to get the API token
function App() {

  return (
    <div className="App">
      {/* <Debugger/> */}
      <Categories/>
    </div>
  )
}

export default App;
