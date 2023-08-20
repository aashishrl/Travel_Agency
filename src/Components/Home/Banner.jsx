import React from 'react'
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <section className='banner'>
      <div className="b-content d-flex flex-column justify-content-center align-items-center text-center">
        <h2 className=''>Its A Big World Out There. <br />Go Explore</h2>
        <span className='dquo-1'>"</span>
        <Link to="/book" className='b-link'>BOOK YOUR TRIP</Link>
      </div>
    </section>
  )
}

export default Banner
