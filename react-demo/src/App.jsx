import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Debugger from './components/debug';
import Categories from './components/categories';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

// Environment is not working so doing hardcoded config

// Run command to get the API token
function App() {
  const token = localStorage.getItem('token')
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="App">
      {/* <Debugger/> */}
      <Categories/>
    </div>
  )
}

export default App;
