import React, { useEffect, useState } from 'react';
import './jobdetails.css';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import Nav from '../navbar/nav';
import { FaStar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


const JobsDetails = () => {
    const { id } = useParams();
    const token = Cookies.get('jwtToken');

    // State to hold job details
    const [jobDetails, setJobDetails] = useState();

    useEffect(() => {
        const detailsAPI = async () => {
            const api = `https://apis.ccbp.in/jobs/${id}`;
            const option = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const response = await fetch(api, option);
                if (response.ok) {
                    const data = await response.json();
                    // Save job details in state
                } else {
                    console.error('Failed to fetch job details');
                }
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };

        detailsAPI();
    }, [id, token]);

    if (!jobDetails) {
        return <div className='loader'>Loading...</div>; 
    }

    return (
        <>
            <div className='jobDetails-page'>
            <Nav />
            <div className="jobdetails-container1">
                <div className='icon-cont1'>
                    <img className='comp_img1' src={jobDetails.company_logo_url} alt="Company Logo" />

                    <div className='title-cont1'>
                        <h3>{jobDetails.title}</h3>
                        <span>
                            <FaStar className='iconimg1' /> {jobDetails.rating}
                        </span>
                    </div>
                </div>

                <div className='location_intern1'>
                    <span className='div_span_cont1'>
                        <FaLocationDot className='loc_img1' /> {jobDetails.location}
                       
                    </span>
                    <span className='div_span_lpa1'>
                        <h4>{jobDetails.package_per_annum}</h4>
                    </span>
                </div>

                <hr />
                <span  className='div_span_cont1'>

                    <h1>Job Description</h1> <a className='ancor' href={jobDetails.company_website_url} >Visit</a>
                    </span>
                <p>{jobDetails.job_description}</p>
                <br />
                <div className="skills">
                    <h1>Required Skills</h1>
                        <ul className="skills-list">
                            {jobDetails.skills.map(skill => (
                                <li key={skill.name} className="skill-item">
                                    <img  src={skill.image_url} alt={skill.name} className="skill-image" />
                                    <h5>{skill.name}</h5>
                                </li>
                            ))}
                        </ul>
                        <div className="lifeatcompany">
                            <h1>Life at Company</h1><br />
                            <span className='descriptiatcmpy'> 
                                <p className='paralife' >{jobDetails.life_at_company.description}</p>
                                <img className='img_life'  src={jobDetails.life_at_company.image_url} alt="" />
                            </span>
                        </div>
                </div>

            </div>

    </div>  
        </>
    );
};

export default JobsDetails;

