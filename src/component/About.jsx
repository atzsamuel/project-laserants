import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About us</h1>
            <p className='lead mb-4'>
              Redbubble was born in 2006 in Melbourne, Australia. The dream was simple. Give independent artists a meaningful new way to sell their creations. Today, we connect over 700,000 artists and designers across the planet with millions of passionate fans. A brave (and dare we say stylish) new world of self expression.
            </p>
            <Link className='btn btn-outline-primary px-3' to="/contact">Contact us</Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src='https://analyticsinsight.b-cdn.net/wp-content/uploads/2021/04/US-Technology-Companies.jpeg' alt='About us' height={400} width={400}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;