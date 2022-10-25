import React from 'react';
// import { useNavigate } from 'react-router-dom';
import email from '../../assets/email.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import smiley from '../../assets/smiley.svg';
import './style.css';

export default function Connect() {

  // const navigate = useNavigate();

  return (

    <div className='connect-container'>
      <div className='connect-h2'>
        <h2>Let's Connect</h2>
      </div>     
      <div className='icon-container'>
          <img className='icon-img' onClick={() => window.location.href = 'https://github.com/mariesophiecd'} src={github} alt='github-icon' />

          <img className='icon-img' onClick={() => window.location.href = 'https://www.linkedin.com/in/marie-sophie-capel-duran-48a429241/'} src={linkedin} alt='linkedin-icon' />

        <img className='icon-img' onClick={() => window.location.href = 'mailto:mariesophie.cduran@gmail.com'} src={email} alt='email-icon' />
      </div>
      <div className='connect-h2'>
        <div className='thank-you'>
          <h2 id='thank-you'>Thank you</h2>
          <img src={smiley} id='smiley' alt='smiley' />
        </div>
      </div> 
    </div>
  )
}

