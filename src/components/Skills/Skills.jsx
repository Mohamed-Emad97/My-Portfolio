import React from 'react';
import {skills} from "../../Utilies/Conts";

export default function Skills() {
  return (
    <>
      <section id="skills" className='py-5'>
        <div className="container">
          <div className="row">
            {skills.map((skill, index) => 
              <>
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <div className="skillIcon text-center">
                    <img src={skill} alt={`skill - ${index}`} className='w-25' />
                  </div>
                </div>
              </>
            )}
            <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="movIcon text-center">
                    <i className="fa-brands fa-bootstrap"></i>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
