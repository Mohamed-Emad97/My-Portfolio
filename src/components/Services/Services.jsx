import React from 'react';

export default function Services() {
  return (
    <>
      <section id="services" className='py-5'>
        <div className="container">
          <div className="mainHeading my-5">
            <p className='text-black-50 mb-0'>
              WHAT I DO?
            </p>
            <h2 className='fw-bolder'> 
              HERE ARE SOME OF <br/> MY EXPERTISE
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="srvBox brdrRed p-4 text-center">
                <div className="icon fs-1 red">
                  <i class="fa-solid fa-palette"></i>
                </div>
                <p className='text-black-50 fs-5 fw-bold mt-2'>
                  UI Developer
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="srvBox brdrYellow p-4 text-center">
                <div className="icon fs-1 yellow">
                  <i class="fa-solid fa-code"></i>
                </div>
                <p className='text-black-50 fs-5 fw-bold mt-2'>
                  Front End Web Developer 
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="srvBox brdrBlue p-4 text-center">
                <div className="icon fs-1 blue">
                  <i class="fa-brands fa-react"></i>
                </div>
                <p className='text-black-50 fs-5 fw-bold mt-2'>
                  React.js Developer 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
