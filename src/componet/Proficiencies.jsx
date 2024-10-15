import React, { useEffect } from 'react'
import AOS from 'aos';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Proficiencies() {


  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []); 

  return (
    <div>
       <div className="about-container">
        <h1 className="background-text" >Proficiencies</h1>
        <h3 className="foreground-text" >My  Technical Skill</h3>
        <div className="divider"></div>
      </div> <br /> <br />

    <div className="container">
      <div className="row boxes">
        <div className="col-lg-3 col-md-3 col-sm-12 box1"  data-aos="fade-right">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" className='img-fluid  img' /> <br /> <br />
            <div className="title">
              <h4>HTML</h4>
              <p className='p2'><b>(HyperText Markup Language)</b> It is used to structure and define the content of web pages.</p>
            </div>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-12 box1"  data-aos="fade-right">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4M9L94_yRecE3tI725XaE9CoZqT5SA1Yiw&s" alt="" className='img-fluid  img' /> <br /> <br />
            <div className="title">
              <h4>CSS</h4>
              <p className='p2'><b>(Cascading Style Sheets)</b>It is used for styling, layout, and design of web pages.</p>
            </div>
        </div>


        <div className="col-lg-3 col-md-3 col-sm-12 box1"  data-aos="fade-right">
            <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" className='img-fluid  img' /> <br /> <br />
            <div className="title">
              <h4>JavaScript</h4>
              <p className='p2'>A scripting language used to bring interactivity and dynamic content to web pages.</p>
            </div>
        </div>


        <div className="col-lg-3 col-md-3 col-sm-12 box1"  data-aos="fade-right">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" className='img-fluid  img' /> <br /> <br />
            <div className="title">
              <h4>React.JS</h4>
              <p className='p2'>A JavaScript library used for building and managing user interfaces in web applications.</p>
            </div>
        </div>
      </div>


<br /> <br />



      <div className="row boxes">
        <div className="col-lg-3 col-md-3 col-sm-12 box1"  data-aos="fade-right">
            <img src="https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png" alt="" className='img-fluid  img' /> <br /> <br />
            <div className="title">
              <h4>BootStrap5</h4>
              <p className='p2'>A popular CSS framework that provides ready-made UI components for responsive and mobile-first web pages.</p>
            </div>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-12 box1"  data-aos="fade-right">
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-css-3d-icon-download-in-png-blend-fbx-gltf-file-formats--open-source-framework-code-logos-and-brands-pack-icons-9325303.png?f=webp" alt="" className='img-fluid  img' /> <br /> <br />
            <div className="title">
              <h4>Tailwind CSS</h4>
              <p className='p2'> A utility-first CSS framework that helps in easily creating customizable and responsive designs.</p>
            </div>
        </div>


        <div className="col-lg-3 col-md-3 col-sm-12 box1 "  data-aos="fade-right">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZFGdMl_Y8qOwfWGr3_DaPOc3z2loTt14Ew&s" alt="" className='img-fluid img' /> <br /> <br />
            <div className="title">
              <h4>C Language</h4>
              <p className='p2'>A general-purpose programming language used in system software and embedded systems development.</p>
            </div>
        </div>


        <div className="col-lg-3 col-md-3 col-sm-12 box1"  data-aos="fade-right">
            <img src="https://www.shutterstock.com/image-vector/media-queries-icon-isolated-sign-260nw-1610367901.jpg" alt="" className='img-fluid img' /> <br /> <br />
            <div className="title">
              <h4>MediaQueries</h4>
              <p className='p2'>A CSS technique used for creating responsive designs by adapting to different screen sizes and devices.</p>
            </div>
        </div>
      </div>






    </div>

    </div>
  )
}
