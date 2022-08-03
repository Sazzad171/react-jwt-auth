import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({ loggedin }) {

  useEffect(() => {
    let prevToken =  localStorage.getItem('access_token');
    if (prevToken) {
      console.log("valid");
    }
    else console.log("invalid");
  });

  return loggedin ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    )
}
