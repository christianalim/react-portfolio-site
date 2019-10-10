import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'

import './App.css';
import Resume from './components/Resume';



function App() {
    return (
        <div>
            <Home />
            <About />
            <Work />
            <Contact />
            <Resume />
        </div>
      );
}

export default App;
