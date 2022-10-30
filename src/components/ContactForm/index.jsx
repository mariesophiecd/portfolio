import React, { useState } from 'react';
import './style.css';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
}

export default function ContactForm(){
  
  const [state, setState] = useState({ name: '', object:'', email: '', content: '' })

  const handleChange = e =>
    setState({ ...state, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contactForm', ...state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))
    e.preventDefault()
    setState({ name: '', object: '', email: '', content: '' })
  }

  return (
    <div className='form-container'>
      <form
        className='contactForm'
        action='/confirmation-page.html' 
        method='POST'
        name='contactform'
        onSubmit={handleSubmit}>
        <input 
          type='hidden' 
          name='form-name'
          value='contactForm' />
        <input required 
          type='text' 
          name='name' 
          placeholder='Your name'
          className='form-input' 
          value={state.name} 
          onChange={handleChange} />
        <input required 
          type='email' 
          name='email'
          placeholder='Your email' 
          className='form-input' 
          value={state.email} 
          onChange={handleChange} />
        <input required 
          type='text' 
          name='object'
          placeholder='Object' 
          className='form-input' 
          value={state.object} 
          onChange={handleChange} />
        <textarea required 
          name='content' 
          placeholder='Type your message here'
          value={state.content} 
          onChange={handleChange}>
        </textarea>
        <input type='submit' className='submit-btn' value='Send !' />
      </form>
    </div>
  )
}

