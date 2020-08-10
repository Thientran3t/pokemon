import React from 'react';
import logo from '../commons/images/logo.svg';
import '../styles/App.css';
import PokemonComponent from '../components/Pokemon';

function App() {
  return (
    <div className="App">
      <PokemonComponent />
    </div>
  );
}

export default App;
