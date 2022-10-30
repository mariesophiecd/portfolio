import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './style.css';

export default function NavBar() {

  // const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  function handleClick(event){
    event.currentTarget.classList.add('menu');
    event.currentTarget.classList.remove('menu');
  }



  return (
    <nav className='navbar'>
        <div className='container'>
            <img src={logo} alt='logo' className='logo' onClick={() => navigate('/')}/>
    
            <div className='menu'>
                <Link to='/' className='nav-links'>Home</Link>
                <Link to='/about' className='nav-links'>About</Link>
                <Link to='/project1' className='nav-links'>Project 1</Link>
                <Link to='/project2' className='nav-links'>Project 2</Link>
                <Link to='/project3' className='nav-links'>Project 3</Link>
                <Link to='/project4' className='nav-links'>Project 4</Link>
            </div>
            <div className='menu-btn'>
              <div className="menu-display">
                <p>Menu</p>
                {/* <span className="menu-bar"></span>
                <span className="menu-bar"></span> */}
                <span className='menu-circle' onClick={handleClick}></span>
              </div>
            </div>
        </div>
    </nav>
  )
}
