import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Modal, Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


export default function Homepage() {

    const [slideIndex, setSlideIndex] = useState(0);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [pincode, setPincode] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [state, setState] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState('');
    const [showTopBtn, setShowTopBtn] = useState(false);





    // Scroll event listener to show/hide the button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { // Show button when scrolled 300px down
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll effect
        });
    };


    // Filtered and sorted products based on search and sort
    const filteredProducts = state
        .filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortType === 'price-asc') return a.price - b.price;
            if (sortType === 'price-desc') return b.price - a.price;
            if (sortType === 'title-asc') return a.title.localeCompare(b.title);
            if (sortType === 'title-desc') return b.title.localeCompare(a.title);
            return 0;
        });

    // db.json fatch

    useEffect(() => {
        fetchInitialData()
    }, [])

    async function fetchInitialData() {
        try {
            const res = await axios.get("https://db-json-1-0u3w.onrender.com/data");
            setState(res.data);
        } catch (error) {
            console.error('There was an error fetching the initial data:', error);
        }
    }


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    // details 
    const handlePincodeChange = (e) => {
        setPincode(e.target.value);
        if (e.target.value.trim()) {
            setError('');
        }
    };

    const toggleDetails = () => {
        if (pincode.trim()) {
            setShowDetails(!showDetails);
        } else {
            setError('Please enter your pincode to proceed.');
        }
    };

    // yes please
    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);

    const handleSubmit = () => {
        if (pincode.trim() !== '') {
            alert('Your message sent successfully');
            setPincode('');
            handleClose();
        } else {
            alert('Please enter a valid pincode');
        }
    };


    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // Slider functionality
    useEffect(() => {
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showSlides() {
            slides.forEach((slide, index) => {
                slide.style.display = index === slideIndex ? 'block' : 'none';
            });
        }

        showSlides();

        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 4000);

        return () => clearInterval(interval);
    }, [slideIndex]);

    const handleNext = () => {
        const slides = document.querySelectorAll('.slide');
        setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        const slides = document.querySelectorAll('.slide');
        setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // error show screensize
    const toggleError = () => {
        const errorrr = document.getElementsByClassName('eroor');
        for (let i = 0; i < errorrr.length; i++) {

            if (errorrr[i].style.display === "block") {
                errorrr[i].style.display = "none";
            } else {
                errorrr[i].style.display = "block";
            }
        }
    };
    // error show Prossecer
    const er2 = () => {
        const errorrr = document.getElementsByClassName('eroor1');
        for (let i = 0; i < errorrr.length; i++) {

            if (errorrr[i].style.display === "block") {
                errorrr[i].style.display = "none";
            } else {
                errorrr[i].style.display = "block";
            }
        }
    }

    // error show Memories
    const toggle = () => {
        setShowError(!showError);
    };

    return (
        <div>
            <nav className="custom-navbar">
                <ul className="navbar-list">
                    <li className="item list">Galaxy Book4Pro | Book4Pro 360</li>
                    <li className="item">Galaxy Book4 | Book4 360</li>
                    <li className="item">Galaxy Book4 Ultra</li>
                </ul>
            </nav>

            {/* Section 1 Slider */}
            <div id="slider" className="container-fluid position-relative" style={{ marginTop: "-4px" }}>
                <div className="d-flex w-100">
                    <div className="slide flex-grow-1">
                        <img src="https://images.samsung.com/is/image/samsung/assets/in/computers/galaxy-book4-pro/buy/GB4_Carousel_KV_UK_PC.jpg?imbypass=true" alt="Slide 1" className="img-fluid" style={{ width: "100%", height: "400px" }} />
                    </div>

                    <div className="slide flex-grow-1">
                        <img src="https://images.samsung.com/is/image/samsung/assets/in/computers/galaxy-book4-pro/buy/GB4_Pro_Carousel_KV_UK_PC.jpg?imbypass=true" alt="Slide 2" className="img-fluid" style={{ width: "100%", height: "400px" }} />
                    </div>

                    <div className="slide flex-grow-1">
                        <img src="https://images.samsung.com/is/image/samsung/assets/us/computing/galaxybooks/galaxy-book4-360/GB4360_HD01-KV-carousel_PC.jpg?imwidth=1366" alt="Slide 3" className="img-fluid" style={{ width: "100%", height: "400px" }} />
                    </div>

                    <div className="slide flex-grow-1">
                        <img src="https://images.samsung.com/is/image/samsung/p6pim/in/feature/165322183/in-feature--nbsp-541771897?$FB_TYPE_K_JPG$" alt="Slide 4" className="img-fluid" style={{ width: "100%", height: "400px" }} />
                    </div>

                    <div className="slide flex-grow-1">
                        <img src="https://www.samsungmobilepress.com/file/8D3443DC2739721EBEED558838402495FC86DE8DACA1E5C3832ECA5C037144967C2449727702D0FE0AA8EBED1B88E09A5EABFE86CFF8C8805B971479F4BC5857403716C7C56A5CB6470F0BCBCA4A0CF151770AE3E7D8EC835FD31F510AFD40B63B248983584288DD25389F0BB682EC0A11809D3FBE80511339B66C43AC0A5FEF8AF6F45C385440C545D9B6D1ED8853863C43F0344FFC1EB557157F94FF98FA92296E47D5E07D585896B37D95CA51EEE029E5D347694D2EBF14911DEA406E76EB" alt="Slide 5" className="img-fluid" style={{ width: "100%", height: "400px" }} />
                    </div>
                </div>

                <button onClick={handlePrev} className="slider-btn slider-btn-left">
                    &#10094;
                </button>
                <button onClick={handleNext} className="slider-btn slider-btn-right">
                    &#10095;
                </button>
            </div>

            {/* Section 2  */}
            {/* Device */}
            <div className="container">
                <h3 style={{ textAlign: "start", marginLeft: "10px", color: "black", marginTop: "50px", fontWeight: "600" }}>Device</h3>
                <div className="row minibox" style={{ marginTop: "30px" }}>
                    <div className="col-lg-4 col-md-4 col-xs-12  box1" >
                        <p style={{ fontSize: "14px" }}> <span style={{ fontSize: "19px", fontWeight: "bold" }}>Galaxy book4 Pro</span>       From $149990.00</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12 box2 d-flex" >
                        <p style={{ fontSize: "14px", fontSize: "19px", fontWeight: "bold" }}> Galaxy book4 Pro <br />360</p>
                        <p style={{ fontSize: "14px" }}>From <br /> $169990.00</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12" ></div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "40px" }}><hr /></div>


            {/* Operting System */}
            <div className="container" style={{ marginTop: "60px" }}>
                <h3 style={{ textAlign: "start", fontWeight: "600" }}>Operting System</h3> <br />
                <div className="row d-flex">
                    <div className="col-lg-7 col-md-7 col-sm-12" style={{ border: "2px solid blue", padding: "20px", borderRadius: "10px" }}>
                        <h5 style={{ textAlign: "start" }}>Windows 11 Home</h5>
                    </div>
                    <div className="col-5 col-md-5 col-sm-12"></div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "40px" }}><hr /></div>


            {/* Screen size */}
            <div className="container" style={{ marginTop: "60px" }}>
                <h3 style={{ textAlign: "start", fontWeight: "600" }}>Screen size</h3> <br />
                <div className="row" style={{ justifyContent: "space-around" }}>
                    {/* Error message */}
                    <p className='eroor1' style={{ textAlign: "start", display: "none" }}>
                        <span style={{ color: "red" }}><i className="fas fa-exclamation-circle"></i></span>
                        Not available in this combination
                    </p>
                    {/* 35.56cm option */}
                    <div className="col-lg-5 col-md-6 col-sm-12 d-flex" onClick={er2} style={{ border: "1px solid lightgray", borderRadius: "10px", justifyContent: "space-between", alignItems: "center", padding: "25px", marginBottom: "20px" }}>
                        <div className="col-6">
                            <p style={{ fontSize: "18px", fontFamily: "sans-serif", color: "lightgray", fontWeight: "bold" }}>
                                35.56cm
                            </p>
                        </div>
                        <div className="col-6">
                            <p style={{ fontSize: "14px", fontFamily: "sans-serif", color: "gray" }}>
                                $139990.00
                            </p>
                        </div>
                    </div>
                    {/* 40.62cm option */}
                    <div className="col-lg-5 col-md-6 col-sm-12 d-flex" style={{ border: "2px solid blue", borderRadius: "10px", justifyContent: "space-between", alignItems: "center", padding: "20px", marginBottom: "20px" }}>
                        <div className="col-6">
                            <p style={{ fontWeight: "bold", fontSize: "17px" }}>40.62cm</p>
                        </div>
                        <div className="col-6">
                            <p style={{ fontSize: "14px", fontWeight: "normal" }}>$163990.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "40px" }}><hr /></div>


            {/* Processor */}
            <div className="container">
                <h3 style={{ textAlign: "start", marginLeft: "10px", color: "black", marginTop: "50px", fontWeight: "600" }}>Processor</h3> <br />
                <div className="row Proce" style={{ gap: "20px" }}  >
                    <p className='eroor' style={{ textAlign: "start", }} > <span style={{ fontSize: "5px" }}><i class="fas fa-exclamation-circle"></i></span>Not available in this combination </p>
                    <div className="col-lg-4 col-md-4 col-sm-12 d-flex Processor" onClick={toggleError} style={{ justifyContent: "space-between", padding: "15px 30px", alignItems: "center", borderRadius: "10px" }}>
                        <h6 style={{ textAlign: "justify", color: "grey", fontSize: "18px" }}>Intel® Core™ <br /> Ultra 5 processor <br /> 155H</h6>
                        <p style={{ color: "grey" }}>₹141990.00</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 d-flex" style={{ justifyContent: "space-between", border: "2px solid blue", padding: "15px 30px", alignItems: "center", borderRadius: "10px" }}>
                        <h6 style={{ textAlign: "justify", color: "grey", fontSize: "18px" }}>Intel® Core™ <br /> Ultra 7 processor <br /> 155H</h6>
                        <p style={{ color: "grey" }}>₹163990.00</p>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "40px" }}><hr /></div>


            {/* Memory */}
            <div className="container">
                <h3 className="text-start ms-2 text-black mt-5 fw-bold">Memory</h3>
                <div className="row mt-4 minibox">

                    {showError && (
                        <p className="text-start text-danger">
                            <span className="text-danger">
                                <i className="fas fa-exclamation-circle"></i>
                            </span>
                            Not available in this combination
                        </p>
                    )}
                    {/* 16 GB option */}
                    <div className="col-lg-3 col-md-4 col-sm-12 d-flex justify-content-between border border-primary align-items-center p-3 rounded">
                        <p className="fw-bold fs-5">16 GB</p>
                        <p className="fs-6">₹179990.00</p>
                    </div>
                    {/* 32 GB option */}
                    <div className="col-lg-3 col-md-4 col-sm-12 d-flex justify-content-between border border-darkgray align-items-center p-3 rounded" onClick={toggle}>
                        <p className="fw-bold fs-5 text-muted">32 GB</p>
                        <p className="fs-6 text-muted">₹181990.00</p>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "40px" }}><hr /></div>


            {/*  Storage */}
            <div className="container">
                <h3 style={{ textAlign: "start", marginLeft: "10px", color: "black", marginTop: "50px", fontWeight: "600" }}>Storage</h3>
                <div className="row minibox" style={{ marginTop: "30px" }}>
                    <div className="col-lg-3 col-md-4 col-sm-12 d-flex storage" style={{ justifyContent: "space-between", alignItems: "center", padding: "20px", borderRadius: "10px" }}>
                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>512 GB</p>
                        <p style={{ fontSize: "15px" }}>₹163990.00</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 d-flex" style={{ justifyContent: "space-between", border: "2px solid blue", padding: "20px", alignItems: "center", borderRadius: "10px", backgroundColor: "#f8f8f8" }}>
                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>1 TB</p>
                        <p style={{ fontSize: "15px" }}>₹179990.00</p>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "40px" }}><hr /></div>

            {/* colour slider */}
            <div className="container">
                <h3 style={{ textAlign: "start", marginLeft: "10px", color: "black", marginTop: "70px", fontWeight: "600" }}>Colour</h3>
                <br />
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="https://images.samsung.com/is/image/samsung/assets/in/computers/galaxy-book4-pro/buy/GB4_Pro360_Color_Selection_Moonstone-Gray_MO.jpg?imwidth=480" alt="Left" className="img-fluid" style={{ cursor: 'pointer' }} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-center">
                        <div onClick={handleShow} className="golmoon" style={{ height: "40px", width: "40px", borderRadius: "50%", textAlign: "center" }} ></div>
                        <p className="text-center" style={{ fontSize: "14px", fontWeight: "bold" }}>Moonstone <br />Gray</p>
                    </div>
                </div>

                {/* Modal */}
                <Modal show={show} onHide={handleClose} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Image Gallery</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpIqbLsidkhAZSITpE4xKh641EaXVBHyOnurX5GRKzeF_PZgASjEqW-fnmSzlpGaNNNs&usqp=CAU"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img"
                                    src="https://image-us.samsung.com/SamsungUS/home/computing/windows-laptops/notebook9-pro/01m.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img"
                                    src="https://images.samsung.com/is/image/samsung/p6pim/in/feature/164358744/in-feature-galaxy-book3-360-13-3-inch-with-s-pen-np730-447651-535661147?$FB_TYPE_A_MO_JPG$"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img"
                                    src="https://image-us.samsung.com/SamsungUS/home/computing/windows-laptops/notebook9-pro/02m.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$"
                                    alt="Fourth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Modal.Body>
                </Modal>
            </div>

            {/* details of input */}
            <div className="container">
                <h3 style={{ textAlign: "start", marginLeft: "10px", color: "black", marginTop: "70px", fontWeight: "600" }}>Delivery Details</h3>
                <br />
                <div className="input-wrapper">
                    {error && <span className="error-message" style={{ color: "red" }}>{error}</span>}
                    <input type="text" placeholder="Enter your PinCode" className="pincode-input" value={pincode} onChange={handlePincodeChange} />
                    <i className="fas fa-chevron-right right-icon" onClick={toggleDetails} style={{ fontSize: "22px" }} ></i>

                    {showDetails && (
                        <div className="details-box">
                            <button className="close-icon" onClick={() => setShowDetails(false)}>
                                &#10005;
                            </button>
                            <div className="details-content">
                                <p> <b>Delivery by Friday, Sep 6 </b></p>
                                <p>Fulfillment By:</p>
                                <p>Samsung India Electronics Pvt. Ltd.</p>
                                <p>Cash on delivery is not available for this location.</p>
                                <hr />
                                <p> <b>Extra benefits - Pickup from Samsung BKC Store </b></p>
                                <p>- Free charger with select products. T&C</p>
                                <p>- Free customization on your Galaxy device.</p>
                                <p>- Free device setup</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="info-container" style={{ textAlign: "start" }}>
                    <span className="text" style={{ textAlign: "start", fontSize: "12px" }}>
                        Order by 11 PM and get Next day delivery. ?
                    </span>
                </div>
            </div>
            <div className="container" style={{ marginTop: "40px" }}><hr /></div>


            {/* Yes please */}
            <div className="container">
                <h3 style={{ textAlign: "start", marginLeft: "10px", color: "black", marginTop: "70px", fontWeight: "600" }}>Exchange</h3> <br />
                <p style={{ textAlign: "start", fontSize: "13px", marginLeft: "15px" }}>Best online exchange value of your current phone <br />
                    <font style={{ color: "blue" }}> Upgrade Bonus ₹ 4000 </font></p>
                <br />
                <div className="row " style={{ textAlign: "start", gap: "20px" }}>
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ border: "1px solid gray", padding: "30px", borderRadius: "10px" }} onClick={handleShow2}>
                        <h5 style={{ fontWeight: "bold" }} >Yes, please</h5>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12" style={{ border: "2px solid blue", padding: "30px", borderRadius: "10px" }}>
                        <h5 style={{ fontWeight: "bold" }}>No, thanks</h5>
                    </div>
                </div>
                <Modal show={show2} onHide={handleClose2} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Enter Your Pincode</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Enter your pincode" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="container" style={{ marginTop: "40px" }}><hr /></div>


            {/* Section 3  */}
            {/* Samsung Care+ */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between mt-4">
                        <h3 className="text-start ms-2 text-black fw-semibold">Samsung Care+</h3>
                        <p> <a href="#" onClick={handleShow3}>Learn </a></p>
                    </div>
                </div>

                <Modal show={show3} onHide={handleClose3} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Here's what's covered</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row text-center">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03_coverage_GenuineParts.png" alt="" className="img-fluid" />
                                <h2 className="fs-6 mt-2 fw-bold">
                                    Samsung Genuine <br /> Parts
                                </h2>
                                <p className="fs-6">Get your phone fixed and looking brand new.</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03_coverage_authorized-svc-repairs.png" alt="" className="img-fluid" />
                                <h2 className="fs-6 mt-2 fw-bold">
                                    Authorised Service <br /> Centre Repairs
                                </h2>
                                <p className="fs-6">Trust your phone with expert technicians.</p>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03_coverage_extensive-cost-savings_IN.png"
                                    alt=""
                                    className="img-fluid"
                                />
                                <h2 className="fs-6 mt-2 fw-bold">Extensive Cost Savings</h2>
                                <p className="fs-6">
                                    Save big on extensive repairs with a low deductible per claim.
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03_coverage_accidental-damage-repair.png"
                                    alt=""
                                    className="img-fluid" />
                                <h2 className="fs-6 mt-2 fw-bold">
                                    Accidental Damage <br /> Repair
                                </h2>
                                <p className="fs-6">
                                    Get up to 2 liquid damages and cracked screens fixed.
                                </p>
                            </div>
                        </div>

                        <div className="row text-center mt-4">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03_coverage_extended-warranty.png" alt=""
                                    className="img-fluid" />
                                <h2 className="fs-6 mt-2 fw-bold">Extended Warranty*</h2>
                                <p className="fs-6">
                                    Keep your phone protected for up to 2 years. * Samsung Care+ prices
                                    are subject to change without notice.
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03_coverage_freepickup.png" alt=""
                                    className="img-fluid" />
                                <h2 className="fs-6 mt-2 fw-bold">Free Pick-up</h2>
                                <p className="fs-6">Repair your device from the comfort of your home.</p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose3}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className="row mt-3">
                    <div className="col-12">
                        <p className="text-start fs-6 ms-2">
                            Protect your device from accidental damage or technical failure
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex bg-light justify-content-start pt-3">
                        <p className="fs-6">
                            <span><i className="fab fa-gg-circle"></i></span>{" "}
                            Select Samsung Care+ to avail extra 5% off on your purchase*
                        </p>
                    </div>
                </div><br /><br />
                <div className="row row-cols-lg-4 row-cols-md-4 row-cols-sm-12 g-3">
                    <div className="col">
                        <div className="d-flex justify-content-between border p-3 rounded">
                            <div>
                                <b> Accidental & <br /> Liquid Damage <br /> Protection (1 Year) </b>
                            </div>
                            <div className="fs-6">
                                <del>₹5999.00 </del> <br /> Save ₹ 299.95 <br />
                                ₹5699.05
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-between border p-3 rounded">
                            <div>
                                <b> Extended <br /> Warranty (1 Year) </b>
                            </div>
                            <div className="fs-6">
                                <del>₹4449.00 </del> <br /> Save ₹ 222.45 <br />
                                ₹4226.55
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex justify-content-between border p-3 rounded">
                            <div>
                                <b> Extended <br /> Warranty (2 Year)</b>
                            </div>
                            <div className="fs-6">
                                <del>₹7699.00 </del> <br /> Save ₹ 384.95 <br />
                                ₹7314.05
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex justify-content-between border p-3 rounded">
                            <div>
                                <b>Comprehensive <br /> Protection (2 Years)</b>
                            </div>
                            <div className="fs-6">
                                <del>₹13299.00</del> <br /> Save ₹ 664.95 <br />
                                ₹12634.05
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-lg-4 row-cols-md-4 row-cols-sm-12 g-3 mt-4">
                    <div className="col">
                        <div className="d-flex justify-content-between border p-3 rounded">
                            <div>
                                <b> Comprehensive <br /> Protection (3 Years)</b>
                            </div>
                            <div className="fs-6">
                                <del>₹20749.00 </del> <br /> Save ₹ 1037.45 <br />
                                ₹19711.55
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex justify-content-between border rounded" style={{ padding: "50px 20px" }}>
                            <div><b>None</b> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "40px" }}><hr /></div>


            {/* Section 4  */}
            {/* Offers & Benefits */}
            <div className="container">
                <h3 style={{ textAlign: "start", marginLeft: "10px", color: "black", marginTop: "70px", fontWeight: "600" }}>Offers & Benefits</h3>

                {/* 1 line */}
                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1">
                    <div className="col mt-4">
                        <div className="boxxess d-flex justify-content-between border p-4 rounded">
                            <div className="bigbox1 text-start">
                                <b> No Cost EMI starts from ₹ 14161.59/ month. <br />Standard EMI starts from ₹ 8727.11/ month. <br /> <u>Learn more(EMI also available on Debit cards)</u> </b>
                            </div>
                            <div className="bigbox2">
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/160_03_samsung_financing.svg" alt="EMI Offer" className="img-fluid" style={{ height: "90px", width: "100px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4">
                        <div className="boxxess d-flex justify-content-between border p-3 rounded">
                            <div className="bigbox1 text-start">
                                <font className="text-primary" style={{ fontSize: "12px" }}>Financial Benefit</font> <br />
                                <b> Instant Bank Discount <br /> ₹ 10000 </b> instant discount on HDFC  Banks' Credit Cards EMI <br /> and Full Payment. <br /> (Offer cannot be clubbed with Additional Exchange Bonus)
                            </div>
                            <div className="bigbox2">
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/hdfc.svg" alt="HDFC Offer" className="img-fluid" style={{ height: "80px", width: "80px", marginTop: "30px" }} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2 line */}
                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1">
                    <div className="col mt-4">
                        <div className="boxxess d-flex justify-content-between border p-4 rounded">
                            <div className="bigbox1 text-start">
                                <b> Shop App Welcome Benefit </b> <br />Up to <b>₹2000 </b> off on Samsung Shop App <br />  <u>Learn more </u>
                            </div>
                            <div className="bigbox2">
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/welcome.svg" alt="Shop Offer" className="img-fluid" style={{ height: "80px", width: "90px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4">
                        <div className="boxxess d-flex justify-content-between border p-4 rounded">
                            <div className="bigbox1 text-start">
                                <b> Student Offers</b> <br /> Flat 10% discount <br /> Gear up for campus with amazing offers <br />
                                <u>Verify now</u>
                            </div>
                            <div className="bigbox2">
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/offer_etc.svg" alt="Student Offer" className="img-fluid" style={{ height: "90px", width: "100px" }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3 line */}
                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-12">
                    <div className="col mt-4">
                        <div className="d-flex justify-content-between border p-3 rounded">
                            <div className="text-start">
                                <p className="text-primary mb-1" style={{ fontSize: "12px" }}>Financial Benefit</p>
                                <b>Samsung Axis Bank Credit Card</b><br />
                                Extra 10% cashback on EMI and full swipe, over and above all offers<br />
                                <u>Apply now</u>
                            </div>
                            <div>
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/axisbankcards.svg" alt="axisbank" height="80" width="90" className="mt-3" />
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4">
                        <div className="d-flex justify-content-between border p-4 rounded">
                            <div className="text-start">
                                <p className="text-primary mb-1" style={{ fontSize: "12px" }}>Exchange Offer</p>
                                <b>Exchange Bonus</b><br />
                                Get ₹ 8000 additional value on exchange of your old phone<br />
                                <u>Learn more</u>
                            </div>
                            <div>
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/exchange.svg" alt="exchange" height="90" width="100" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* line 4 */}
                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-12">
                    <div className="col mt-4">
                        <div className="d-flex justify-content-between border p-3 rounded">
                            <div className="text-start">
                                <p className="text-primary mb-1" style={{ fontSize: "12px" }}>Buy More Save More</p>
                                <b>Buy More Save More</b><br />
                                Get 5% off* for 2 or more eligible products purchased together<br />
                                <u>(Explore now)</u>
                            </div>
                            <div>
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/bmsm.svg" alt="bmsm" height="80" width="90" className="mt-3" />
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4">
                        <div className="d-flex justify-content-between border p-4 rounded">
                            <div className="text-start">
                                <p className="text-primary mb-1" style={{ fontSize: "12px" }}>Referral Benefit</p>
                                <b>Referral Advantage Program</b><br />
                                Get 5% additional discount using referral code<br />
                                <u>Learn more</u>
                            </div>
                            <div>
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/offer_discount.svg" alt="offer_discount" height="90" width="100" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* line 5 */}
                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-12">
                    <div className="col mt-4">
                        <div className="d-flex justify-content-between border p-2 rounded">
                            <div className="text-start">
                                <p className="text-primary mb-1" style={{ fontSize: "12px" }}>GST Invoice Benefit</p>
                                <b>Save Up To 18%</b><br />
                                Get GST invoice and save up to 18% on purchases.
                            </div>
                            <div>
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/discount.svg" alt="gst-invoice" height="80" width="90" className="mt-3" />
                            </div>
                        </div>
                    </div>

                    <div className="col mt-4">
                        <div className="d-flex justify-content-between border p-3 rounded">
                            <div className="text-start">
                                <b>Video Demonstration</b><br />
                                Now see a live demonstration <u>See it Live</u><br />
                                Timing 08 AM - 11:59 PM all days <u>Learn more</u>
                            </div>
                            <div>
                                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/video.svg" alt="video-demo" height="80" width="80" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br />
            <div className="container" style={{ marginTop: "40px" }}><hr /></div>


            {/* video */}
            <div className="container">
                <h3 className='h3-video' style={{ marginLeft: "10px", color: "black", marginTop: "70px", fontWeight: "600" }}>Samsung.com Advantage</h3>

                <div className="row mt-4">
                    <div className="col-lg-3 col-md-4 col-sm-12 videos responsive-box">
                        <h5><b>Samsung Finance+ </b></h5>
                        <p className="info-text">
                            Avail assured No Cost EMI, with <br /> Instant approvals. Debit / Credit <br /> card not required
                        </p>
                        <a href="https://youtu.be/lVSBOfB16SE?si=26olGBHcK6iyGJZM" className="video-link">Watch Video</a>
                    </div>
                </div>

            </div> <br />

            <div className="container" style={{ marginTop: "40px" }}><hr /></div>


            {/* product slider */}
            <div className="container">
                <h3 style={{ textAlign: "start", marginLeft: "10px", color: "black", marginTop: "70px", fontWeight: "600" }}>Multi by Offer</h3>
                <br />
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ padding: "10px", marginBottom: "20px", width: "100%" }}
                />

                {/* Sorting Dropdown */}
                <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                    style={{ padding: "10px", marginBottom: "20px", width: "100%" }}
                >
                    <option value="">Sort by</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="title-asc">Title: A to Z</option>
                    <option value="title-desc">Title: Z to A</option>
                </select>

                {/* Product (db.json) Slider */}

                <Slider {...settings}>
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card" style={{ border: "1px solid black" }}>
                            <img src={product.img} alt={product.title} height={"180px"} width={"250px"} />
                            <div className="product-details">
                                <p className="product-title"> <b>{product.title} </b></p>
                                <p className="product-description">{product.description}</p>
                                <p><b>Price: {product.price}</b></p>
                                <button className="product-button">
                                    <Link to={`/Samsungdetails/${product.id}`} style={{ color: "white", textDecoration:"none" }}>Add Now</Link>
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="container" style={{ marginTop: "60px" }}><hr /></div>


            {/* Accordian */}
            <div className="container">

                <h3 className="text-center my-5"  style={{ color:"black", fontWeight:"600" }} >
                    Galaxy Book4 Pro | Book4 Pro 360
                </h3>
                <hr />

                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {/* <!-- First Accordion Item --> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" style={{fontSize:"22px"}}>
                                <b>See Actual Size</b>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <img src="https://images.samsung.com/is/image/samsung/assets/in/computers/galaxy-book4-pro/buy/GB4_360_See-Actual-Size_PC_1440x547_B.jpg?$ORIGIN_JPG$" alt="Galaxy Book4" className="img-fluid img-thumbnail rounded mx-auto d-block" />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Second Accordion Item --> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" style={{fontSize:"22px"}}>
                                <b>Key Features</b>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="row">
                                    {/* <!-- Feature 1 --> */}
                                    <div className="col-md-6" style={{textAlign:"justify"}}>
                                        <h6><b>Next-gen AI power that empowers you</b></h6>
                                        <p>The lightning-fast Intel® Core™ Ultra and Intel® Core™ 7/5 processors let you speed through heavy workloads and multitask smoothly with pro-grade apps...</p>
                                    </div>
                                    {/* <!-- Feature 2 --> */}
                                    <div className="col-md-6 " style={{textAlign:"justify"}}>
                                        <h6><b>Dynamic AMOLED 2X. Your inspiration shines</b></h6>
                                        <p>Bring your artistic vision to life on the breathtaking display. Marvel at the crisp details in high resolution with bright and vivid colors...</p>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    {/* <!-- Feature 3 --> */}
                                    <div className="col-md-6 text-justify" style={{textAlign:"justify"}}>
                                        <h6><b>Touchscreen with S Pen. Tap to get creative</b></h6>
                                        <p>Create works of art intuitively using your fingertips or the included S Pen on the touchscreen of Galaxy Book4 Pro 360...</p>
                                    </div>
                                    {/* <!-- Feature 4 --> */}
                                    <div className="col-md-6 text-justify" style={{textAlign:"justify"}}>
                                        <h6><b>Anti-reflective cover glass. Dazzling views at any angle</b></h6>
                                        <p>Experience a clear view of your favorite content with less distractions thanks to Corning® Gorilla® Glass with DX...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Third Accordion Item --> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" style={{fontSize:"22px"}}>
                                <b>Reviews</b>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <Link to={"/"}><img src="https://display.ugc.bazaarvoice.com/common/images/trustmark_icons/trustmark_en.png" alt="Trustmark" className="img-fluid"  /></Link>
                                <p className="mt-4">No reviews have been submitted yet.</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div> <br />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex" style={{ backgroundColor: "beige", justifyContent: "start", paddingTop: "15px" }}>
                        <p style={{ textAlign: "center", fontSize: "12px" }}>  * Images shown here are for representational purpose only, actual may vary. All features, specifications and prices are subject to change without prior notice. Model availability may vary from location to location.</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container-fluid">
                <p style={{ textAlign: "start", fontSize: "14px", marginTop: "-10px" }}>Home <i className='fas fa-chevron-right right-icon'></i>   Galaxy  Book  <i className='fas fa-chevron-right right-icon'></i>  Galaxy Book4 Pro  <i className='fas fa-chevron-right right-icon'></i> Buy</p>
            </div>


            {showTopBtn && (
                <Button onClick={scrollToTop} style={{ position: 'fixed', bottom: '40px', right: '40px', backgroundColor: 'black', color: 'white', borderRadius: '50%', padding: '8px 13px', fontSize: '20px', zIndex: 1000, }}>
                    <i className="fas fa-chevron-up"></i>
                </Button>
            )}
            <br /><br />

        </div>
    );
}
