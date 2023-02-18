import React from 'react';

export default function Home() {
  return (
    <>
      <section id="home" className="vh-100">
        <div className="container h-100">
          <div className="caption text-center center flex-column h-100">
              <h1 className='fw-bolder'>Hi , I'm Mohamed Emad <br/> Front End Web Developer</h1>
              <p className='text-black-50 fs-4 my-3'>
              Specialized in UI developer and Front End Web Development <br/>
              Have an experience in web designing and development <br/>
              building high quality & responsive websites using <br/> 
              HTML5, CSS3, SCSS, Bootstrap, JavaScript and React JS.
              </p>
              <a href="https://drive.google.com/file/d/1OBwOZwGfXv4drm91epCs4If1l6q9LOdu/view?usp=sharing" className='btnMain px-3 p-2 rounded-3'>Download CV</a>
          </div>
        </div>
      </section>
    </>
  )
}
