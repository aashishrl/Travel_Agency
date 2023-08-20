import React from 'react'

function Content() {
    return (
        <section className='container py-5'>
            <div className="h-content text-center">
                <h2 className=' pb-3'>WELCOME TO SHERPA EXPEDITION & TREKKING PVT. LTD</h2>
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <img src="https://www.sherpaexpeditiontrekking.com/assets/images/logo/logo1.png" className='w-100' alt="" />
                    </div>
                    <div className="col-lg-8">
                        <p className='m-0'>SHERPA EXPEDITION is a trekking and tour company run by a group of enthusiastic tourism professionals. For over two decades, we have been helping travelers from around the globe make their dreams come true at the foothills or at the peaks of The Himalayas, Nepal. Whether you wish to scale the world’s greatest mountain ranges at 7000m, 8000m, or below 7000m, or you wish to start with less demanding base camp treks such as Everest Base Camp Trek, Annapurna Circuit Trek, Langtang Region Trek, or treks in many other regions, our experienced trekking and climbing guides are ever ready to help you reach your goal. If all you want to do is enjoy the magnificent landscapes and beautiful sceneries, we have customized holiday packages in store for you to make your holidays a memorable one. These trekking trips, climbing expeditions, city tours, and many more are available not only in Nepal, but also in Tibet, Bhutan, India and China. Get in touch with us today to find out more!
                        </p>
                    </div>
                </div>
            </div>

            <div className="c-icons">
                <h2 className=' py-5 mt-5 text-center'>WHY BOOK WITH US</h2>
                <div className="row text-center">
                    <div className="col-lg-3 d-flex flex-column align-items-center">
                        <div className=" c-icon1 mb-3 d-flex justify-content-center align-items-center">
                            <i className="fa-flip-horizontal ci1 fa fa-trophy" aria-hidden="true"></i>
                        </div>
                        <h3 className='pb-2'>Award winning company</h3>
                        <p>We've received Certificate of Excellence award from TripAdvisor.</p>
                    </div>
                    <div className="col-lg-3 d-flex flex-column align-items-center">
                        <div className=" c-icon1 mb-3 d-flex justify-content-center align-items-center">
                            <i className="fa-flip-horizontal ci2 fa fa-users" aria-hidden="true"></i>
                        </div>
                        <h3 className='pb-2'>Local Experts</h3>
                        <p>We're a local travel agency. When you book with us, you get best price.</p>
                    </div>
                    <div className="col-lg-3 d-flex flex-column align-items-center">
                        <div className=" c-icon1 mb-3 d-flex justify-content-center align-items-center">
                            <i className="fa-flip-horizontal ci3 fa fa-cc-mastercard" aria-hidden="true"></i>
                        </div>
                        <h3 className='pb-2'>Trusted Payments</h3>
                        <p>Book via our secure payment platform. Enjoy flexible payment options.</p>
                    </div>
                    <div className="col-lg-3 d-flex flex-column align-items-center">
                        <div className=" c-icon1 mb-3 d-flex justify-content-center align-items-center">
                            <i className="fa-flip-horizontal ci4 fa fa-language" aria-hidden="true"></i>
                        </div>
                        <h3 className='pb-2'>Multi Language Speaking Guide</h3>
                        <p>We have a guide who can speak multi language which will be helpful for travelers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content
