import React from 'react';
import {summary} from "../../Utilies/Conts";

export default function About() {
  return (
    <>
      <section id="about" className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="content p-3 text-black-50 fs-6">
                {summary.map((txt,i)=>
                  <>
                    <p>{txt}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
