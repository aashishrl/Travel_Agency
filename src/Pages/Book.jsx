import React from 'react'

function Book() {
    return (
        <section className='py-5'>
            <div className="container">  
            <h1 className='pb-5'>Form</h1>            
                <div className="row justify-content-center">
                    <div className="tour-booking-form col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb30">
                        <div className="">
                            <form>
                                <div className="row">                                 
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label required" htmlFor="select">Destination</label>
                                            <div className="select">
                                                <select id="select" name="select" className="form-control">
                                                    <option value>Whats Your Plan</option>
                                                    <option value>Trekking</option>
                                                    <option value>Hiking</option>
                                                    <option value>Sightseeing</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="datepicker">Check in</label>
                                            <div className="input-group">
                                                <input id="datepicker" name="datepicker" type="text" placeholder="Date" className="form-control" required />
                                                <span className="input-group-addon"><i className="fa fa-calendar" /></span> </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label required" htmlFor="select">Number of Persons:</label>
                                            <input id="name" type="text" placeholder="" className="form-control" required />                                           
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label required" htmlFor="select">Budgets</label>
                                            <div className="select">
                                                <select id="select" name="select" className="form-control">
                                                    <option value>Standard</option>
                                                    <option value>Medium</option>
                                                    <option value>Low</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>                                
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="name">Name</label>
                                            <input id="name" type="text" placeholder="First Name" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="email"> Email</label>
                                            <input id="email" type="text" placeholder="xxxx@xxxx.xxx" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="phone"> Phone</label>
                                            <input id="phone" type="text" placeholder="country Code  ********" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="country">Country</label>
                                            <input id="country" type="text" placeholder="Nepal" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="city">City</label>
                                            <input id="city" type="text" placeholder="Kathmandu" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="textarea">Describe Your Travel Requirements</label>
                                            <textarea className="form-control" id="textarea" name="textarea" rows={4} placeholder="Write Your Requirements" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button type="submit" name="singlebutton" className="enquiry">send Enquiry</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>              
            </div>

        </section>
    )
}

export default Book
