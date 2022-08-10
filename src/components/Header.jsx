import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

export default function Header() {
  return (
    <header className='bg-secondary py-2'>
      <div className="container">
      <ListGroup horizontal className='justify-content-center'>
        <ListGroup.Item>
          <Link to="/">Root</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="home">Home</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="login">Login</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="logout">Logout</Link>
        </ListGroup.Item>
      </ListGroup>
      </div>
    </header>
  )
}
