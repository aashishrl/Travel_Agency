import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <navbar className='nav py-1'>
            <div className="container">
                <ul className='d-flex gap-4 m-0 p-0'>
                    <li><Link className='nav-link' to={'/'}>HOME</Link></li>
                    <li><a className='nav-link' href='#main-activity'>ACTIVITIES</a></li>
                    <li className="dropdown">
                        <Link to={"trekking"} className="nav-link dropdown-toggle" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                            TREKKING
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><Link to={"/trekking/everest-region-trekking"} className="dropdown-item">Everest Region Trekking</Link></li>
                            <li><Link to={"/trekking/annpurna-region-trekking"} className="dropdown-item">Annapurna Region Trekking</Link></li>
                            <li><Link to={"/trekking/manaslu-region-trekking"} className="dropdown-item">Manaslu Region Trekking</Link></li>
                            <li><Link to={"/trekking/langtang-region-trekking"} className="dropdown-item">Langtang Region Trekking</Link></li>
                        </ul>
                    </li>
                    <li><Link className='nav-link' to={'training'}>TRAINING</Link></li>
                    <li><Link className='nav-link' to={'blogs'}>BLOGS</Link></li>
                </ul>
            </div>
        </navbar>
    )
}

export default Nav
