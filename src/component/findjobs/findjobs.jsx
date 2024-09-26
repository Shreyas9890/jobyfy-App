import React from 'react'
import './findjobs.css'
import { FaStar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Findjobs = (props) => {
  const { jobsItem } = props;

  return (
    <Link className="link-findJb" to={`/jobs/${jobsItem.id}`}>
    <li className='card-list' >
      <div className='icon-cont'>
        <img className='comp_img' src={jobsItem.company_logo_url} />

        <div className='title-cont'>
          <h3>{jobsItem.title}</h3>
          <span><FaStar className='iconimg' />
            {jobsItem.rating}</span>
        </div>
      </div>
      <div className='location_intern'>
        <span className='div_span_cont'> <FaLocationDot className='loc_img' />
          {jobsItem.location} 
          <FaShoppingBag className='loc_img' />
          {jobsItem.employment_type}
        </span>
        <span className='div_span_lpa'><h4>{jobsItem.package_per_annum}</h4> </span>
      </div>
      <hr />
      <div className='descr'>
        <h5>Description</h5>
        <p className='para'>{jobsItem.job_description}</p>
      </div>
      </li></Link>
  )
}

export default Findjobs