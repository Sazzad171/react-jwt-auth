import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout({ setToken, setLoggedin }) {

  let navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    setLoggedin(false);
    setToken('');
    navigate("/", {replace: true});
  });

}