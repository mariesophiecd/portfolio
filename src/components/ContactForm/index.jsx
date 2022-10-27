import React from 'react';
import './style.css';

export default function ContactForm(){
  return (
    <div className='form-container'>
      <form action='mailto:mariesophie.cduran@gmail.com' method='POST' >
        <input required className='form-input' type='text' placeholder='Your name' />
        <input required className='form-input' type='email' placeholder='Your email' />
        <input required className='form-input' type='text' placeholder='Object' />
        <textarea required>Type your message here</textarea>
        <input className='submit-btn' type='submit' value='Send !' />
      </form>
    
    </div>
  )
}

