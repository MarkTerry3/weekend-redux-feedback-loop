import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';

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
      <Understanding />
      <Supported />
      <Comments />

    </div>
  );
}




export default App;
