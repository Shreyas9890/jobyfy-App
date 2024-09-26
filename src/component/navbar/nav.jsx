import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

const Nav = () => {
    const navigate = useNavigate();
    const handleClick = () => {
       Cookies.remove('jwtToken');
       navigate('/login');
    }

    
  return (
    <div className='nav-cont'>
            <Link to='/'>
              <img className='img-cont'  src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="" />
            </Link>
           <ul className='ul-cont'>
              <li > <Link to="/" className='item-cont' href="">Home</Link></li>
              <li> <Link to="/Jobs" className='item-cont' href="">Jobs</Link></li>
           </ul>
          <button className='btn btn-primary' onClick={handleClick}>Logout</button>

    </div>
  )
}

export default Nav