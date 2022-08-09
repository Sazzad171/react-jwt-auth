import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {

  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [loggedin, setLoggedin] = useState(true);

  return (
    <>
      <Header />
      <main style={{ 'minHeight': '80vh' }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/*" element={<PrivateRoute loggedin={loggedin} />} >
            <Route path="home" element={<Home />} />
            <Route path="logout" element={<Logout setToken={setToken} />} />
          </Route>
          <Route path="login" element={<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} setToken={setToken} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
