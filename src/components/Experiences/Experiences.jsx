import React from 'react';
import {experiences} from "../../Utilies/Conts";

export default function Experiences() {
  return (
    <>
    <section id="exp" className='mb-3'>
      <h3 className='fw-bolder mb-4'>Experiences</h3>
      {experiences.map((exp, i) =>
        <>
          <div className="expBox my-3 center justify-content-between">
            <div className="detail">
                <div className="title">
                  <h5>{exp.title}</h5>
                </div>
                <div className="desc d-flex">
                  <span className="org me-5">
                    <span className="iconOrg text-black-50 me-2">
                      <i class="fa-solid fa-building"></i>
                    </span>
                    {exp.org}
                  </span>
                  <span className="location me-5">
                    <span className="iconLocation text-black-50 me-2">
                      <i class="fa-solid fa-location-dot"></i>
                    </span>
                    {exp.location}
                  </span>
                  <span className="position">
                    <span className="iconPos text-black-50 me-2">
                      <i class="fa-solid fa-id-badge"></i>
                    </span>
                    {exp.position}
                  </span>
                </div>
            </div>
            <div className="date">
              <span className="iconDate text-black-50 me-2">
                <i class="fa-regular fa-calendar-days"></i>
              </span>
              {exp.duration}
            </div>
          </div>
        </>
      )}
    </section>
    </>
  )
}
