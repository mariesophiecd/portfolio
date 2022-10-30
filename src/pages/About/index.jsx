import React from 'react';
// import ContactForm from '../../components/ContactForm';
import portrait from '../../assets/portrait.jpg';
import './style.css';

export default function About() {
  return (
    <div className='about-container'>
      <header className='about-header'>
        <div className='picture'>
          <img src={portrait} alt='portrait' className='profile-pic' />
        </div>
        <div className='intro'>
          <h2 className='about-h2'>Hi, I'm Marie-Sophie.</h2>
          <p className='about-p'>a junior front-end developer. </p>
        </div>
      </header>
      <section>
        <div className='my-values'>
          <h3 className='about-h3'>My Values</h3>
          <p className='col-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='my-achievements'>
          <h3 className='about-h3'>My Achievements</h3>
          <p className='col-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='my-contact'>
          <h3 className='about-h3'>Get in Touch</h3>
          <p className='col-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>
    </div>
  )
}
