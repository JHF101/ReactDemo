import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Debugger from './components/debug';
import Categories from './components/categories';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Logout from './auth/logout';
// Environment is not working so doing hardcoded config

function App() {
    var token = null;
    try {
        token = localStorage.getItem('token');
    } catch(err) {
        console.log("No token in storage")
    }
    console.log(token)

    if (token == null) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="App">
            {/* <Debugger/> */}
            <Categories/>
            <Logout />
        </div>
    )
}

export default App;
