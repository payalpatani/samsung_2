import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import payalImage from '../payal.JPEG';

export default function About() {
    return (
        <div>
            <div className="about-container">
                <h1 className="background-text" >ABOUT ME</h1>
                <h3 className="foreground-text" >know me more</h3>
                <div className="divider"></div>
            </div>
            <br />

            <div className="container animated-box">
                <div className="row" style={{ justifyContent: "space-evenly", display: "flex" }}>
                    <div className="col-lg-7 col-md-7 col-sm-12 fade-in-left"> <br />
                        <span style={{ fontSize: "25px", fontWeight: "bold", textAlign: "justify" }}>
                            Hello ! I'm <font style={{ color: "#bd5510", fontSize: "30px" }}>Payal Patani,</font> a Web Developer
                        </span>
                        <p className='p1'>
                            I like to build websites/applications that serve the world and always want to enhance my knowledge & adopt new technologies that make an impact on people. My interest in web development started when I joined Red & White Multimedia Education to learn Frontend Web-Development — it taught me a lot about HTML & CSS.
                            <br />Fast-forwarding to today, I have built a number of web applications and major projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, here I am looking for an opportunity as a Frontend developer.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 fade-in-right">
                        <img src={payalImage} alt="Payal Patani" className="img-fluid rounded-circle shadow-lg" />
                        <br />
                        <ul className="info-list">
                            <li><strong>Name :- </strong> Payal Patani</li>
                            <li><strong>Email :- </strong><span style={{ color: "#bd5510" }}>payalpatani83@gmail.com </span></li>
                            <li><strong>From :- </strong> Ahemadabad, India</li>
                        </ul>

                        <div className="text-start mt-3">
                            <a href="/resume.pdf.pdf" download className="btn btn-primary">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
