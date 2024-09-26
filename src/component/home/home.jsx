import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../navbar/nav';
import './home.css';

const Home = () => {

  return (
    
    <div className='main-cont'>
    <Nav/>
      <div className='span-cont'>
    
      <h1 className='heading'>Find the Jobs that fits your life</h1>
      <br />
        <p className='para'>Millions of people are searching for jobs,<br /> sallry, information, company reviews.
          Find the jobs that firts your ability and your potential</p>
          <Link to='/jobs'>
          <button className='btn btn-primary'>Find Jobs</button>
        </Link>
    </div>
    
    </div>
    
  )
}

export default Home 