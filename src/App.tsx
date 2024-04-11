import React from 'react';
import background from './assets/background.svg'
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Services from './components/Services/Services';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <NavBar/>
      <Landing/>
      <Services/>
    </div>
  );
}

export default App;
