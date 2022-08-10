import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout({ setLoggedin }) {

  let navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    setLoggedin(false);
    navigate("/", {replace: true});
  });

}