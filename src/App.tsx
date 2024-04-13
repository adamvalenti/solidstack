import React from 'react';
import background from './assets/background.svg'
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Main from './components/Main/Main';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <NavBar/>
      <Landing/>
      <Main/>
    </div>
  );
}

export default App;
