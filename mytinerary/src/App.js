import React from 'react';
import Navbar from './components/Navbar';
import './styles/App.css';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      {/* <p>Hola mundo</p> */}
    </div>
  );
}

export default App;
