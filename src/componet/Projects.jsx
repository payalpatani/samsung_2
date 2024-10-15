import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Projects() {
  
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      {/* Projects Title Section */}
      <div className="about-container">
        <h1 className="background-text" >PROJECTS</h1>
        <h3 className="foreground-text" >My Work</h3>
        <div className="divider"></div>
      </div>

      <br />

      {/* Project Content */}
      <div className="container">
        <div className="row" style={{ justifyContent: "space-around" }}>
          <div className="col-lg-4 col-md-4 col-sm-12" data-aos="fade-right">
            <a href="https://samsungofficialsite.netlify.app">
              <img
                src='/samsung.png.png'
                alt="Samsung Project"
                className="img-fluid shadow-lg project-image"
              />
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ textAlign: "justify" }} data-aos="fade-left">
            <h4> Samsung Galaxy Book 4 Pro- Clone</h4>
            <p><b style={{ color: "#bd5510" }}>Technologies Used :- (React, Bootstrap, JavaScript, Redux, React Router)</b></p>
            <p style={{ color: "#8d8d8d" }} className='projectlines'>
              The Samsung Galaxy Book 4 Pro is a premium laptop that offers a blend of performance, style, and innovation...
            </p>
          </div>
        </div>

        <br /><br />

      
        <br /><br />

        <div className="row" style={{ justifyContent: "space-around" }}>
          <div className="col-lg-4 col-md-4 col-sm-12" data-aos="fade-right">
            <a href="https://bootstrapp-1234.netlify.app">
              <img
                src='/Geekproject.png.png'
                alt="Geeks Online Learning"
                className="img-fluid shadow-lg project-image"
              />
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ textAlign: "justify" }} data-aos="fade-left">
            <h4> Geeks Online Learning Marketplace</h4>
            <p><b style={{ color: "#bd5510" }}>Technologies Used :- (Only HTML , CSS , Bootstrap)</b></p>
            <p style={{ color: "#8d8d8d" }} className='projectlines'>
              Welcome to Geeks Online Learning Marketplace, your gateway to a world of knowledge and skills...
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
