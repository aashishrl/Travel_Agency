import React from 'react'
import Data from '../../Data/Data'

function TopPicks() {
    const filter = Data.filter(aa => aa.id == 17)
    const filter1 = Data.filter(a1 => a1.id == 46)
    const filter2 = Data.filter(a2 => a2.id == 51)
    const filter3 = Data.filter(a2 => a2.id == 22)
    return (
        <section className='py-5 mb-5'>
            <div className="container">
                <h2 className="tp-main-title text-center mb-5 mt-4">Top Picks</h2>
                <div className="row">
                {filter.map(bb => (
                        <div className="col-lg-4 tp-box4">
                            <img src={bb.thumbnail} className='object-fit-cover w-100' height="100%" alt="" />
                            <div className="tp-title1 text-uppercase">{bb.title}</div>
                        </div>
                    ))}
                    <div className="col-lg-8">
                        <div className="row row-gap-4">
                            {filter1.map(cc => (
                                <div className="col-lg-12 tp-box1">
                                    <img src={cc.thumbnail} height="100%" className='w-100 object-fit-cover' alt="" />
                                    <div className="tp-title1 text-uppercase">{cc.title}</div>
                                </div>
                            ))}
                            {filter2.map(dd => (
                                <div className="col-lg-6 tp-box2">
                                    <img src={dd.thumbnail} height="100%" className='w-100' alt="" />
                                    <div className="tp-title1 text-uppercase">{dd.title}</div>
                                </div>
                            ))}
                            {filter3.map(ee => (
                                <div className="col-lg-6 tp-box3">
                                    <img src={ee.thumbnail} height="100%" className='w-100' alt="" />
                                    <div className="tp-title1 text-uppercase">{ee.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    )
}

export default TopPicks
