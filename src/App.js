import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <Header />
      <main style={{ 'minHeight': '80vh' }}>
        <Routes>
          <Route path="/*" element={<PrivateRoute />} >
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
