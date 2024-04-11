import React from 'react';
import background from './assets/background.svg'
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <NavBar/>
    </div>
  );
}

export default App;
