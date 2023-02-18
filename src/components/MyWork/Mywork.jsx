import React from 'react';
import {projects} from "../../Utilies/Conts";


export default function Mywork() {

  function show(id) {
    let popUp = document.querySelector(".pop-up");
    popUp.classList.add("d-block");
    popUp.classList.remove("d-none");    

    let img = document.querySelector("#projectImg");
    let title = document.querySelector("#projectTitle");
    let desc = document.querySelector("#projectDesc");
    let gitRepo = document.querySelector("#repo");
    let liveDemo = document.querySelector("#live");

    img.src = projects[id].img;
    title.innerHTML = projects[id].title;
    desc.innerHTML = projects[id].desc;
    gitRepo.href = projects[id].gitRepo;
    liveDemo.href = projects[id].liveDemo;

    console.log(projects[id]);
  }

  function close() {
    let popUp = document.querySelector(".pop-up");

    popUp.classList.add("d-none");
    popUp.classList.remove("d-block");
  }

  return (
    <>
      <section id="myWork" className='py-5'>
        <div className="container">
          <div className="mainHeading text-center mb-3">
            <h2 className='fw-bolder'>My Work</h2>
          </div>
          <div className="row">
            {projects.map((project,i)=>
              <>
                <div key={i} className="col-lg-4 col-md-6 my-3">
                  <div onClick={()=> show(i)} className="projectBox position-relative">
                    <img src={project.myWork} details={project} alt="test" className='w-100'/>
                    <div className="overlay text-center fs-5 text-white p-5">
                      <p className='title'>{project.title}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <div className="pop-up vh-100 py-5 d-none">
        <div className="container my-5">
          <div className="projectDetails p-5">
            <span onClick={close} id='close' className='text-black-50 fs-2'><i className="fa-solid fa-xmark"></i></span>
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="projImg">
                  <img src="" alt="Project-pic" id='projectImg' className="w-100" />
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="projInfo">
                  <h3 id='projectTitle' className='fw-bolder'></h3>
                  <span className='fw-bolder fs-6 text-black-50'>Description:</span> <br/>
                  <p id='projectDesc' className='text-black-50'></p>
                  <div className="btns">
                    <a id='repo' href="" className='btnMain px-3 p-2 rounded-3 me-2'>GitHub Repo</a>
                    <a id='live' href="" className='btnMain px-3 p-2 rounded-3'>Live Demo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
