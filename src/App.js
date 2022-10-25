import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import * as Pages from './pages';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
        <Routes> 
          <Route path='/' element={<Pages.Home />} />
          <Route path='/about' element={<Pages.About />} />
          <Route path='/contact' element={<Pages.Contact />} />
          <Route path='/project1' element={<Pages.Project1 />} />
          <Route path='/project2' element={<Pages.Project2 />} />
          <Route path='/project3' element={<Pages.Project3 />} />
          <Route path='/project4' element={<Pages.Project4 />} />
        </Routes>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
      </header>
    </div>
  );
}

export default App;
