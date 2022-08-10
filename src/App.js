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
  const [loggedin, setLoggedin] = useState(false);
  const [userInfo, setUserInfo] = useState('');

  return (
    <>
      <Header />
      <main style={{ 'minHeight': '80vh' }}>
        <Routes>

          {/* default public route */}
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login email={email} setEmail={setEmail} password={password}
             setPassword={setPassword} loggedin={loggedin} setLoggedin={setLoggedin} />} />

          {/* protected route */}
          <Route path="/*" element={<PrivateRoute loggedin={loggedin} setLoggedin={setLoggedin} setUserInfo={setUserInfo} />} >
            <Route path="home" element={<Home userInfo={userInfo} />} />
            <Route path="logout" element={<Logout setLoggedin={setLoggedin} />} />
          </Route>

        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
