import React from 'react';
import Navbar from './components/Navbar';
import './styles/App.css';
import Footer from './components/Footer';
import Main from "./components/Main"
import {Route, Routes} from "react-router-dom"
import Cities from './components/Cities';
import Details from './components/Details';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/index' element={<Main />} />
        <Route path='/' element={<Main />} />
        <Route path='/home' element={<Main />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/cities/citydetails/:id' element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
