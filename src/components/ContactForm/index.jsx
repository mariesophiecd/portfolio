import React, { useState } from 'react';
import './style.css';

export default function ContactForm(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [object, setObject] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState([]);

  function handleName(e){
    setName(e.target.value);
  }

  function handleEmail(e){
    setEmail(e.target.value);
  }

  function handleObject(e){
    setObject(e.target.value);
  }

  function handleContent(e){
    setContent(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    const newMessage = {yourName: name, yourEmail: email, yourObject: object, yourContent: content};
    setMessage([...message, newMessage]);
    setName('');
    setEmail('');
    setObject('');
    setContent('');
  }

  return (
    <div className='form-container'>
      <form
        className='contactForm'
        action='/confirmation-page' 
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
          value={name} 
          onChange={handleName} />
        <input required 
          type='email' 
          name='email'
          placeholder='Your email' 
          className='form-input' 
          value={email} 
          onChange={handleEmail} />
        <input required 
          type='text' 
          name='object'
          placeholder='Object' 
          className='form-input' 
          value={object} 
          onChange={handleObject} />
        <textarea required 
          name='message' 
          placeholder='Type your message here'
          value={content} 
          onChange={handleContent}>
        </textarea>
        <input type='submit' className='submit-btn' value='Send !' />
      </form>
    
    </div>
  )
}

