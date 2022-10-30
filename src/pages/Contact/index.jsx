import React, { useState } from 'react';
import ContactForm from '../../components/ContactForm';
import './style.css';

export default function Contact({name, email, object, content}) {

  return (
    <div className='contact-container'>
      <div className='contact-content'>
        <h2 className='contact-h2'>Let's Work <span className='highlight-dark'>Together</span></h2>
        <p className='contact-p'>I'm open to work at the moment. So if you like what you see, drop me a message below.</p>
      </div> 
      <div className='contact-form'> 
        <ContactForm name={name} email={email} object={object} content={content} />
      </div>
    </div>
  )
}

