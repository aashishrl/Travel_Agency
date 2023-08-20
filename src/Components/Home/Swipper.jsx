import React from 'react'
import { Link } from 'react-router-dom'

function Swipper() {
    return (
        <section>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={10000}>
                        <img height='600' src="https://images.prismic.io/elite-exped/1140880b-d5c0-4677-9192-5aba56528add_Kili-1+copy.webp?auto=compress,format&rect=0,0,5472,3648&w=1200&h=800" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Climb Mt Vinson </h5> 
                            <h6>and ski to the last degree</h6>
                            <Link to="/book" className='b-link'>BOOK YOUR TRIP</Link>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                        <img height='600' src="https://images.prismic.io/elite-exped/929b50bb-7d7f-4c2b-a7a1-fdcd5225f96e_Vin.jpg?auto=compress,format&rect=0,0,5472,3648&w=1200&h=800" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Cho Oyu & Shishapangma </h5> 
                            <h6>Booking Now Open</h6>
                            <Link to="/book" className='b-link'>BOOK YOUR TRIP</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img height='600' src="https://images.prismic.io/elite-exped/602909a3-0fb6-4ba7-b1c4-68b2ad1bf58e_Shish.jpg?auto=compress,format&rect=0,0,5472,3648&w=1200&h=800" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h6>Kilimanjaro</h6>
                            <Link to="/book" className='b-link'>BOOK YOUR TRIP</Link>
                        </div>
                    </div>
                </div>               
            </div>

        </section>
    )
}

export default Swipper
