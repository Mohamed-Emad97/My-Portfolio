import React from 'react';
import {myPic} from "../../Utilies/Imgs";

export default function Navbar() {
    
    return (
        <>
            <header className='fixed-top'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand d-flex align-items-center" href="#home">
                            <img src={myPic} alt="Profile-Pic"  className='logoImg rounded-circle'/>
                            <p className='h6'>Mohamed Emad</p>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto text-md-center text-sm-center text-center text-lg-start mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#skills">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#resume">Resume</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#myWork">My-Work</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
