import React from 'react'
import { Link } from 'react-router-dom'

function Activity() {
  return (
    <section id='main-activity' className='activity'>
      <div className="container">
            <h2 className='pb-5 text-center'>Activities</h2>
            <div className="row flex-wrap row-gap-5 justify-content-center">
                <div className="col-lg-3 a-box">
                    <div className="a-content">
                        <Link to="activity/heli-tour" >
                            <div className='a-c-img'>
                                <img src="https://plus.unsplash.com/premium_photo-1661963576759-54fad6a1d6ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlbGljb3B0ZXIlMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" width="100%" alt="" />
                                <div className="ac-color"></div>
                            </div>
                            <p className='fw-bold text-center pt-0'>Heli Tour</p>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 a-box">
                    <div className="a-content">
                        <Link to="activity/trekking" >
                            <div className='a-c-img'>
                                <img src="https://images.pexels.com/photos/732632/pexels-photo-732632.jpeg?auto=compress&cs=tinysrgb&w=1600" width="100%" alt="" />
                                <div className="ac-color"></div>
                            </div>
                            <p className='fw-bold text-center pt-0'>Trekking</p>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 a-box">
                    <div className="a-content">
                        <Link to="activity/sightseeing" >
                            <div className='a-c-img'>
                                <img src="https://images.unsplash.com/photo-1663060010422-a4b846aa1037?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJoYWt0YXB1ciUyMGR1cmJhciUyMHNxdWFyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" width="100%" alt="" />
                                <div className="ac-color"></div>
                            </div>
                            <p className='fw-bold text-center pt-0'>Sightseeing</p>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 a-box">
                    <div className="a-content">
                        <Link to="activity/jungle-safari" >
                            <div className='a-c-img'>
                                <img src="https://images.unsplash.com/photo-1572065897336-d808c386c9ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8anVuZ2xlJTIwc2FmYXJpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" width="100%" alt="" />
                                <div className="ac-color"></div>
                            </div>
                            <p className='fw-bold text-center pt-0'>Jungle Safari</p>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 a-box">
                    <div className="a-content">
                        <Link to="activity/mount-kailash" >
                            <div className='a-c-img'>
                                <img src="https://i0.wp.com/alpineclubofhimalaya.com/wp-content/uploads/2021/03/kailash-with-simikot.jpg?resize=270%2C330&ssl=1" width="100%" alt="" />
                                <div className="ac-color"></div>
                            </div>                           
                            <p className='fw-bold text-center pt-0'>Mount Kailash</p>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 a-box">
                    <div className="a-content">
                        <Link to="activity/paragliding" >
                            <div className='a-c-img'>
                                <img src="https://images.pexels.com/photos/2132013/pexels-photo-2132013.jpeg?auto=compress&cs=tinysrgb&w=1600" width="100%" alt="" />
                                <div className="ac-color"></div>
                            </div>
                            <p className='fw-bold text-center pt-0'>Paragliding</p>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 a-box">
                    <div className="a-content">
                        <Link to="activity/hiking" >
                            <div className='a-c-img'>
                                <img src="https://images.unsplash.com/photo-1522850067562-a4c60453058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhpa2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" width="100%" alt="" />
                                <div className="ac-color"></div>
                            </div>
                            <p className='fw-bold text-center pt-0'>Hiking</p>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 a-box">
                    <div className="a-content">
                        <Link to="activity/river-rafting" >
                            <div className='a-c-img'>
                                <img src="https://images.unsplash.com/photo-1530866495561-507c9faab2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpdmVyJTIwcmFmdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" width="100%" alt="" />
                                <div className="ac-color"></div>
                            </div>
                            <p className='fw-bold text-center pt-0'> River Rafting</p>
                        </Link>
                    </div>
                </div>
            </div>
      </div>
    </section>
  )
}

export default Activity
