import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import Success from '../Success/Success';

function App() {


  useEffect(() => {
    console.log("Inside useEffect");
    // getPizza();
  }, []);




  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>


    <Route path='/' exact >
      <Feeling />
    </Route>

    <Route path='/understanding' exact>
      <Understanding />
    </Route>

    <Route path='/supported' exact>
      <Supported />
    </Route>

    <Route path='/comments' exact>
      <Comments />
    </Route>

    <Route path='/reviewfeedback' exact>
      <ReviewFeedback />
    </Route>

    <Route path='/success' exact>
      <Success />
    </Route>

    </div>
    </Router>
  );
}




export default App;
