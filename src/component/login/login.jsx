import React, { useEffect, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

const Login = () => {

  const [allValues, setValues] = useState({
    username: "",
    password: "",
    showErrorMsg: false,
    errorMsg: "",

  });
  const navigate = useNavigate();
  const token = Cookies.get("jwtToken")
  
  const onSubmitUserDetails = async (e) => {

    e.preventDefault();

    const api = "https://apis.ccbp.in/login";

    const userDetails = {
      username: allValues.username,
      password: allValues.password
    }

    const option = {
      method: "Post",
      body: JSON.stringify(userDetails)
    }

    const response = await fetch(api, option);
    const data = await response.json();
    console.log(response);
    console.log(data);

    if(response.ok === true){
      setValues({...allValues,showErrorMsg : false ,errorMsg:""});
      navigate('/'); 
      Cookies.set("jwtToken",data.jwt_token);
    }
    else{
      setValues({...allValues,showErrorMsg : true ,errorMsg:data.error_msg});
    }
  }

  useEffect(()=>{
    if(token !== undefined){
      navigate('/');
    }
    else{
      
    }
  },[])
  return (
    <div className='log-cont'>
      <form action="" className='form-cont' onSubmit={onSubmitUserDetails}>
        <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="" className='img1' />
        <div className='form-input'>
            <label htmlFor="username">User Name</label>
            <input onChange={(e) => {
            setValues({ ...allValues, username: e.target.value })}}
            className='form-input form-control ' type="text" name="username" id='username' placeholder="username" />
        </div><br />
        <div className='form-input'>
            <label htmlFor="password">Password</label>
            <input onChange={(e) => {
            setValues({ ...allValues, password: e.target.value })}} 
            className='form-input form-control ' type="password" name="password" id='password' placeholder="rahul@2021" />
        </div><br />
            <button className='btn btn-primary'>Login</button>
            {
              allValues.showErrorMsg ? <p className='text text-danger'>{allValues.errorMsg}</p> : null
            }
      </form>
    </div>
  )
}

export default Login