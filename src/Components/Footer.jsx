import React from 'react'

function Footer() {
  return (
    <>
      <section className='footer'>
        <div className="container">
          <div className="row ">
            <div className="col-lg-4">
              <img width="100%" src="https://www.sherpaexpeditiontrekking.com/assets/images/logo/logo1.png" alt="" />
            </div>
            <div className="col-lg-6 offset-2" >
              <div className="row">
                <div className="col-lg-4">
                  <h5>Enquiries</h5>
                  <ul className='m-0 p-0'>
                    <li>General</li>
                    <li>Exped</li>
                    <li>FAQs</li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h5>Quick links</h5>
                  <ul className='m-0 p-0'>
                    <li>Terms & Conditions</li>
                    <li>All Expeditions</li>
                    <li>Everest</li>
                    <li>K2</li>
                    <li>Fast-Track</li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h5>Contact</h5>
                  <ul className='m-0 p-0'>
                    <li>Chaksibari Marg, Thamel Kathmandu 44600</li>
                    <li>01 2300000</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <div className="footer-text">
        <p>©2023 AASHISH RL</p>
      </div>
    </>
  )
}

export default Footer
