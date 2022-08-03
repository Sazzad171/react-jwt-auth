import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login({ email, setEmail, password, setPassword, setToken }) {

  let navigate = useNavigate();

  // on form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios({
        url: "http://localhost:8000/auth/login",
        method: "POST",
        headers: {
          authorization: "Bearer " + setToken
        },

        data: {"email": email, "password": password}
      })
      .then((res) => {
        console.log(res.data);
        setToken(res.data.access_token);
        localStorage.setItem('access_token', res.data.access_token);
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

  return (
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
  )
}
