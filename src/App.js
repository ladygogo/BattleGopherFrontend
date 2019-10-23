import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GameForm from './pages/GameForm';
import Game from './pages/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Battle Gopher</h1>
      <BrowserRouter>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/new-game' component={ GameForm } />
        <Route exact path='/game' component={ Game } />
      </BrowserRouter>
    </div>
  );
}

export default App;
