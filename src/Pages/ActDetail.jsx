import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '../Data/Data'

function ActDetail() {
  const { id } = useParams()
  var data = Data.filter(aa => aa.category == id)

  return (
    <section className='container py-5'>     
     <div className="breadcrumb ps-2">
          <span href="#">HOME</span> 
          <span className='mx-2'>&gt;&gt;</span>
          <span className='text-uppercase fw-bold'>{id}</span>         
        </div>
      <div className="row">
      {data.map(bb => (           
        <div className="col-lg-4">
          <div className="wrapper">      
            <div className="cards">
              <div className="card">
                <img src={bb.thumbnail} className='w-100 object-fit-cover' height="250"/>
                <div className="card__details">
                  <h3 className='m-0'>{bb.title}</h3>
                  <div className="a-d"><i class="fa fa-clock-o" aria-hidden="true"></i> {bb.duration}</div>
                  <div className="price__l">
                    <span className="price__label me-3">${bb.price}</span>
                    <span className="measure-label">{bb.discountPercentage}% OFF</span>
                  </div>
                  <Link to={"/book"} className='button'>BOOK NOW</Link>
                </div>
              </div>          
            </div>
          </div>
        </div>
        ))}
      </div>

    </section>
  )
}

export default ActDetail
