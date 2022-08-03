import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout({ setToken }) {

  let navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    setToken('');
    navigate("/home", {replace: true});
  })

  return (
    <div>
      <h2>Logout here</h2>
    </div>
  )
}
