import React from 'react';
import { Form } from 'react-bootstrap';

export default function Login() {
  return (
    <section className='py-5'>
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-md-5">
            <div className="card py-4 px-3">
              <h3 className="text-center">Login here</h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="email..." />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Your password</Form.Label>
                  <Form.Control type="password" placeholder="password..." />
                </Form.Group>
              </Form>
              <button className="btn btn-success w-100">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
