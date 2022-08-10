import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({ loggedin, setLoggedin, setUserInfo }) {

  useEffect(() => {
    // check user is logged in or not
    const user = JSON.parse(localStorage.getItem('user_info'));
    if (user && user.access_token) {
      setUserInfo(user);
      setLoggedin(true);
      console.log("You are logged in");
    } 
    else {
      setLoggedin(false);
      console.log("You are not logged in");
    }
  }, [loggedin, setLoggedin, setUserInfo]);

  return loggedin ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    )
}
