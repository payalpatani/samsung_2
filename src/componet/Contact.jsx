import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css'; 
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendmsg(event) {
       
        event.preventDefault();
        if (name && email && message) {
            alert("Message sent successfully");
           
            setName('');
            setEmail('');
            setMessage('');
        } else {
            alert("Please fill in all fields.");
        }
    }


    useEffect(() => {
        AOS.init({ duration: 1200 });
      }, []);
    

    return (
        <div>
            <div className="container-fluid">
                <div className="row row-cols-lg-12 row-cols-md-12 row-cols-sm-12 about-container">

                    <h1 className="background-text" >CONTACT</h1>
                    <h3 className="foreground-text" >Get In Touch</h3>
                    <div className="divider"></div>

                </div>
            </div><br />

            <div className="container">
                <div className="row inputbox">
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-4" data-aos="fade-right">
                        <div className="text2">
                            <h4>ADDRESS</h4>
                            <p> C/34, Shivdhara Socitey, <br /> Near Nirmal Park, <br /> Odhav, Ahemadabad-382415</p>
                            <br />
                            <p>
                                <i className="fa fa-phone" aria-hidden="true"></i> : 9499735605 <br />
                                <i className="fa fa-whatsapp" aria-hidden="true"></i> : 9054119985 <br />
                                <i className="fa fa-envelope" aria-hidden="true"></i>: payalpatani83@gmail.com
                            </p>
                            <br />

                            <h4>Follow Me</h4>
                            <div className="social-icons iconee">
                                <a href="http://www.linkedin.com/in/payal-patani-9b8617307" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="https://github.com/payalpatani" target="_blank" rel="noreferrer">
                                    <i className="fab fa-github fa-2x"></i>
                                </a>
                                <a href="https://google.com" target="_blank" rel="noreferrer">
                                    <i className="fab fa-google fa-2x"></i>
                                </a>
                               
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-7 col-sm-12 mb-4" data-aos="fade-left">
                        <div className="textt3">
                            <h4>SEND US A NOTE</h4>
                        </div>
                        <br />
                        <form onSubmit={sendmsg}>
                            <div className="input1">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        placeholder='Name'
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className='form-input name-input form-control'
                                    />
                                    <input
                                        type="email"
                                        placeholder='Email'
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='form-input email-input form-control'
                                    />
                                </div>
                                <br />
                                <textarea
                                    placeholder='Tell us more about your needs........'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className='form-input textarea-input form-control'
                                    rows="5"
                                ></textarea>
                                <br /> <br />
                                <button className='submit-button btn btn-primary' type='submit'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
