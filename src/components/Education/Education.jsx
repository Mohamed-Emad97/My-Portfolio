import React from 'react';
import {education} from "../../Utilies/Conts";

export default function Education() {
  return (
    <>
      <section id="education">
        <h3 className='fw-bolder mb-3'>Education</h3>
        {education.map((edu,i) =>
          <>
            <div className="expBox my-3 center justify-content-between">
              <div className="detail">
                <div className="title">
                  <h5>{edu.certificate}</h5>
                </div>
                <div className="desc d-flex">
                  <span className="org me-5">
                    <span className="iconOrg text-black-50 me-2">
                      <i class="fa-solid fa-building"></i>
                    </span>
                    {edu.org}
                  </span>
                  <span className="location me-5">
                    <span className="iconLocation text-black-50 me-2">
                      <i class="fa-solid fa-location-dot"></i>
                    </span>
                    {edu.location}
                  </span>
                  <span className="position">
                    <span className="iconPos text-black-50 me-2">
                      <i class="fa-solid fa-id-badge"></i>
                    </span>
                    {edu.degree}
                  </span>
                </div>
              </div>
            <div className="date">
              <span className="iconDate text-black-50 me-2">
                <i class="fa-regular fa-calendar-days"></i>
              </span>
              {edu.duration}
            </div>
          </div>
          </>
        )}
      </section>
    </>
  )
}
