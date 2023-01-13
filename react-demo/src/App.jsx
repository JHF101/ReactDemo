import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Debugger from './components/debug';
import getApiToken from './auth/auth';
// Environment is not working so doing hardcoded config
import getCategories from './api/categoriesAPI';

// Run command to get the API token
const generateToken = getApiToken();
const categories = getCategories();

function App() {

  return (
    <div className="App">
      <Debugger/>
    </div>
  )
}

export default App;
