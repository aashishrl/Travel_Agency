import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='py-1'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <Link to={'/'}><img src="https://www.sherpaexpeditiontrekking.com/assets/images/logo/logo1.png" width="300" alt="" /></Link>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div className='hlink-1'>
              <a href=""><i className="fa fa-envelope" aria-hidden="true"></i></a>
            </div>
            <div className='hlink-2'>
              <a href=""><i className="fa fa-phone" aria-hidden="true"></i></a>
            </div>
            <div className='hlink-3'>
              <Link><i className="fa fa-user-plus" aria-hidden="true"></i></Link>
            </div>
            <div className='hlink-4'>
              <Link><i className="fa fa-user" aria-hidden="true"></i></Link>
            </div>
            <div className='hlink-5'>
             <Link><i class="fa fa-search" aria-hidden="true"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
