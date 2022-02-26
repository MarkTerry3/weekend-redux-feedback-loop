import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';

import Feeling from '../Feeling/Feeling';

function App() {


  useEffect(() => {
    console.log("Inside useEffect");
    // getPizza();
  }, []);




  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>



      <Feeling />

    </div>
  );
}




export default App;
