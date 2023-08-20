import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '../Data/Data'

function TrekkingRegion() {
  const { name } = useParams();
  const filter = Data.filter(aa => aa.category == name)
  return (
    <section className='pb-5 pt-5'>
      <div className="container">
        <div className="breadcrumb">
          <span href="#">HOME</span> 
          <span className='mx-2'>&gt;&gt;</span>
          <span className='text-uppercase fw-bold'>{name}</span>         
        </div>
        <div className="row pt-4 row-gap-5 justify-content-center">
          {filter.map(bb => (
            <div className="col-lg-4 trek-col">
              <div className="trek-box p-2">
                <div className="tb-content">
                  <div className="img">
                    <img src={bb.thumbnail} className='w-100 ' height="300" alt="" />
                    <div className="trek-price">$ {bb.price}</div>
                    <Link to="/book" className="trek-book">BOOK NOW</Link>
                  </div>
                  <div className='pt-3'>
                    <h2 className='mb-0 pb-2'>{bb.title}</h2>
                    <p className='trek-rate'><i className="text-warning pe-1 fa fa-star" aria-hidden="true"></i><i className="text-warning pe-1 fa fa-star" aria-hidden="true"></i><i className="text-warning pe-1 fa fa-star" aria-hidden="true"></i><i className="text-warning pe-1 fa fa-star" aria-hidden="true"></i><i className="text-warning pe-1 fa fa-star" aria-hidden="true"></i>
                      <span>Top Rated</span>
                    </p>
                    <div className="d-flex justify-content-between text-dark">
                      <p className='mb-1'><i className="ttc-icon me-1 fa fa-map-marker" aria-hidden="true"></i>Nepal</p>
                      <p className='mb-1'><i className="ttc-icon me-1 fa fa-heartbeat" aria-hidden="true"></i>Beginner</p>
                      <p className='mb-1'><i className="ttc-icon me-1 fa fa-clock-o" aria-hidden="true"></i>{bb.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="trek-discount">{bb.discountPercentage}% OFF</div>
              </div>
              <div className="tr-detail">View Detail</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrekkingRegion
