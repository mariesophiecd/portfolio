import React from 'react';
import Connect from '../../components/Connect';
import Header from '../../components/Header';
import Projects from '../../components/Projects';

export default function Home() {
  return (
    <div className='home-container'>
      <div>
        <Header />
      </div>
      <div>
        <Connect />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  )
}
