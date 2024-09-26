import React from 'react'
import './notfound.css'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
  
        const navigate = useNavigate();

        const handleClick = () => {
            navigate('/login'); 
        }
  return (
    <div className='notfound-page'>
          <img src="https://www.pngarts.com/files/4/Sorry-Emoji-PNG-Image-Background.png" alt="" className='img' />
            <h1>404</h1>
            <h2>Sorry,Page Not Found</h2>
            <p>It looks like you've followed a bad link or entered a wrong URL</p>
          <button className='btn btn-primary' onClick={handleClick}>Redirect to Loging Page</button>
    </div>
  )
}

export default Notfound