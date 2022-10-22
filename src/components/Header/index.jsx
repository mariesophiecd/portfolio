import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Header() {
  
  const navigate = useNavigate();

  return (
    <div className='header-container'>
      <h1>Creative</h1>
      <h2>Front-End <span id='highlight'>Developer</span></h2>
      <h3>I build smart, low carbon websites and apps.</h3>
      {/* <div> */}
      <button className='contact-btn' onClick={() => navigate('/contact')}>Work with Me</button>
      {/* </div> */}




        
    </div>
  )
}
