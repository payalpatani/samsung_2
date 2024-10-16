import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleFooter = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            {/* Main Expandable Footer */}
            {isExpanded && (
                <div className="container-fluid bg-light py-4">
                    <div className="row">
                        {/* Footer Part 1 */}
                        <div className="col-lg-3  col-md-3 col-sm-12 mb-3">
                            <h5 className="text-uppercase mb-3" style={{ textDecoration: 'underline' }}>Product & Service</h5>
                            <ul className="list-unstyled">
                                <li>Smartphones</li>
                                <li>Tablets</li>
                                <li>Audio Sound</li>
                                <li>Watches</li>
                                <li>Smart Switch</li>
                                <li>TVs</li>
                                <li>Sound Devices</li>
                                <li>Refrigerators</li>
                                <li>Monitors</li>
                                <li>Memory Storage</li>
                            </ul>
                        </div>
                        {/* Footer Part 2 */}
                        <div className="col-lg-3  col-md-3 col-sm-12 mb-3">
                            <h5 className="text-uppercase mb-3" style={{ textDecoration: 'underline' }}>Shop</h5>
                            <ul className="list-unstyled">
                                <li>FAQs</li>
                                <li>Contact Us</li>
                                <li>Welcome Voucher</li>
                                <li>Samsung Referral Advantage</li>
                                <li>Samsung Student Advantage</li>
                                <li>Corporate Bulk Purchase</li>
                                <li>Samsung Experience Store</li>
                                <li>Store Locator</li>
                                <li>Smart Club</li>
                                <li>Terms of Use</li>
                            </ul>
                        </div>
                        {/* Footer Part 3 */}
                        <div className="col-lg-3  col-md-3 col-sm-12 mb-3">
                            <h5 className="text-uppercase mb-3" style={{ textDecoration: 'underline' }}>Account & Community</h5>
                            <ul className="list-unstyled">
                                <li>My Page</li>
                                <li>My Products</li>
                                <li>Orders</li>
                                <li>Wishlist</li>
                                <li>Vouchers</li>
                                <li>My Referrals</li>
                                <li>Service</li>
                                <li>Community</li>
                            </ul>
                        </div>
                        {/* Footer Part 4 */}
                        <div className="col-lg-3  col-md-3 col-sm-12 mb-3">
                            <h5 className="text-uppercase mb-3" style={{ textDecoration: 'underline' }}>Sustainability</h5>
                            <ul className="list-unstyled">
                                <li>Environment</li>
                                <li>Security & Privacy</li>
                                <li>Accessibility</li>
                                <li>Diversity · Equity · Inclusion</li>
                                <li>Corporate Citizenship</li>
                                <li>Corporate Sustainability</li>
                                <li>About Us</li>
                                <li>Company Info</li>
                                <li>Business Area</li>
                                <li>Brand</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Fixed Footer */}
            <div className="container-fluid    bg-light text-light py-3">
                
                    <div className="row  d-flex justify-content-center align-items-center">
                    
                    <div className=" col-lg-4 col-md-4 col-sm-12 logo">
                        <img
                            src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"
                            alt="Logo"
                            width="80px"
                        />
                    </div>
                    <div className=" col-lg-4  col-md-4 col-sm-12 d-flex align-items-center justify-content-center position-relative">
                        <button
                            className="btn btn-outline-primary p-0 px-2 "
                            onClick={toggleFooter}
                            aria-expanded={isExpanded}
                            style={{
                                position:"absolute",
                                top:"-55px",
                                left:"70px",
                                // borderColor: '#007BFF', 
                                color: '#007BFF', 
                                fontSize: '1.2rem', 
                                transition: 'all 0.3s ease', 
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#e7f0ff'; 
                                e.target.style.borderColor = '#0056b3'; 
                                
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent'; 
                                e.target.style.borderColor = '#007BFF'; 
                                e.target.style.transform = 'scale(1)'; 
                            }}
                        >
                            <i className={`fas ${isExpanded ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                        </button>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 details">
                        <p className="mb-0" style={{ fontSize: '13px', color: "black" }}>
                            <b>Office Address :- </b> 6th Floor, DLF Centre, Sansad Marg,ND-110001<br />
                            Corporate Identification Number (CIN): U31900DL1995PTC071387 <br />
                            Please dispose of e-waste and plastic waste responsibly.<br />
                            <b>Copyright ⓒ 1995-2024 SAMSUNG All Rights reserved.</b>
                        </p>
                    </div>
                    </div>
                
            </div>
        </div>
    );
}
