import React from 'react';
import {Education , Experiences} from "../index";
import {ResumeBg} from "../../Utilies/Imgs";

export default function Resume() {
  return (
    <>
      <section id="resume" className='py-5'>
        <div className="container">
          <div className="mainHeading text-center">
            <h2 className='fw-bolder'>Resume</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 my-2">
              <img src={ResumeBg} alt="resume-pic" className='w-100' />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-8 col-md-6 my-2">
              <div className="content">
                <Experiences/>
                <Education/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
