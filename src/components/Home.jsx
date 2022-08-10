import React from 'react';

export default function Home({ userInfo }) {
  return (
    <section className='py-5'>
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-md-6">
            <div className="card p-3">
              <h1 className='text-center'>Welcome, You are logged in!</h1>
              <p><b>Your Access Token:</b> {userInfo.access_token}</p>
              <p><b>Your ID:</b> {userInfo.id}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
