import React from 'react';
import Navbar from './components/Navbar';
import './styles/App.css';
import Slider from './components/Slider';
import Banner from './components/Banner';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Slider />
      {/* <p>Hola mundo</p> */}
      <Footer />
    </div>
  );
}

export default App;
