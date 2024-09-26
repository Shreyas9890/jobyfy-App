import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import React, { useEffect } from 'react'

const ProtectedRoutes = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    const token = Cookies.get("jwtToken");

    useEffect(() => {

      if (token === undefined) {
            navigate("/login");
        }
    }, []);

  return (
    <Component/>
  )
}

export default ProtectedRoutes