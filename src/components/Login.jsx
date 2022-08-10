import { Form } from 'react-bootstrap';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';

export default function Login({ email, setEmail, password, setPassword, loggedin, setLoggedin }) {

  let navigate = useNavigate();

  // on form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputted data
    let data = {"email": email, "password": password}
    
    try {
      await axios.post("http://localhost:8000/auth/login", data)
      .then((res) => {
        console.log(res.data);
        setLoggedin(true);

        let userInfo = {
          access_token: res.data.access_token,
          id: Math.random()
        }

        localStorage.setItem('user_info', JSON.stringify(userInfo));
        setEmail('');
        setPassword('');
        navigate("/home", { replace: true });
      })
    }
    catch(err) {
      alert("Wrong user information");
      console.log(err);
    }
  }

  return !loggedin ? (
    <section className='py-5'>
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-md-5">
            <div className="card py-4 px-3">
              <h3 className="text-center">Login here</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email..." />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Your password</Form.Label>
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password..." />
                </Form.Group>
                <button className="btn btn-success w-100" type='submit'>Submit</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Navigate to="/home" />
  )
}
