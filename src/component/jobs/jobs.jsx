import React, { useEffect, useState } from 'react'
import Nav from '../navbar/nav';
import "./jobs.css"
import Cookies from 'js-cookie';
import Findjobs from '../findjobs/findjobs';
import FilterSection from '../fillterJobs/fillterjobs';


const Jobs = () => {
  const [allValues, setValues] = useState({
    jobslist: [],
    empType: [],
    minPakage: "",
    userSearch: ""
  });

  useEffect(() => {

    const token = Cookies.get("jwtToken")
    const findjobsApi = async () => {
      console.log(allValues.minPakage)
      const api = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.minPakage}&search=${allValues.userSearch}`
      const option = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
      const response = await fetch(api, option);
      const data = await response.json();
     
      if (response.ok === true) {
        setValues({ ...allValues, jobslist: data.jobs });
        
      }
    }
    findjobsApi();
  }, [allValues.userSearch, allValues.empType, allValues.minPakage]);

   

  const onChangeUserSearch = (event) => {
    if (event.key === "Enter") {
      setValues({ ...allValues, userSearch: event.target.value });
    }

  }
  

  const changeEmpType=(value,isChecked)=>{
    if(isChecked === true){
    setValues({...allValues, empType:[...allValues.empType,value]});
  }
else{
  setValues({ ...allValues, empType: allValues.empType.filter(each=> each !== value)})
}  
}


  const changeSalaryRange = (value) => {
    
    setValues({...allValues, minPakage:value });
  };


  return (

    <>
      <Nav />
      <div className='jobs-cont'>
        <div className='fillter-jobs'>
          <div className="jobs-filter-section">
            {
              <FilterSection changeEmp={changeEmpType} changeSalary={changeSalaryRange} />
              
            }
          </div>
        </div>
        <div className='find-jobs'>
          <ul>
            
                <input onKeyDown={onChangeUserSearch} className="navbar form-control" type="search" placeholder="Search" />
                {/* <button  className="btn btn-outline-success my-2 my-sm-0" >Search</button> */}
             
            {
              allValues.jobslist.map(each => <Findjobs jobsItem={each} key={each.id} />)
            }
          </ul>
        </div>
      </div>

    </>

  )
}

export default Jobs