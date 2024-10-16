import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function BuyNow() {
    const navigate = useNavigate();

    const [formDetails, setFormDetails] = useState({
        name: '',
        address: '',
        email: '',
        mobile: '',
        cardNumber: '',
        cvv: '',
    });

    const handleChange = (e) => {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Payment Details Submitted:', formDetails);
        navigate("/Thankyou");
    };

    return (
        <div className="container" style={{ maxWidth: '1000px', marginTop: '30px' }}>
            {/* Title */}
            <h4 className="mb-3 text-center" style={{ fontSize: '24px',  fontWeight: 'bold',   color: 'black',  letterSpacing: '1px',   position: 'relative', textTransform: 'uppercase', }}>
                BUY NOW
                {/* Decorative underline */}
                <div style={{  position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '3px', backgroundColor: '#6C63FF',  borderRadius: '2px' }}></div>
            </h4> <br />


            {/* Card */}
            <div className="card shadow-lg p-4" style={{ borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
                <form onSubmit={handleSubmit}>

                  
                  
                    <div className="row">
                        {/* Delivery Details */}

                        <div className="col-md-6">
                            <h4 className="mb-3 text-center" style={{ fontSize: '24px', fontWeight: 'bold',  color: 'black',  letterSpacing: '1px',  position: 'relative',  textTransform: 'uppercase',  }}>
                                DELEVERY Details
                                {/* Decorative underline */}

                                <div style={{  position: 'absolute',  bottom: '-10px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '3px', backgroundColor: '#6C63FF',   borderRadius: '2px', }}></div>
                            </h4> <br />

                            <div className="mb-3">
                                <input type="text" name="name" className="form-control" placeholder="Full Name" value={formDetails.name}
                                    onChange={handleChange} required style={{ padding: '10px', fontSize: '16px', borderRadius: '5px' }}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="address"  className="form-control" placeholder="Delivery Address" value={formDetails.address}
                                    onChange={handleChange} required  style={{ padding: '10px', fontSize: '16px', borderRadius: '5px' }}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="pincode" className="form-control"  placeholder="PIN Code"  pattern="[0-9]{6}"
                                    onChange={handleChange} required  style={{ padding: '10px', fontSize: '16px', borderRadius: '5px' }}
                                />
                            </div>
                        </div>

                        {/* Payment Details */}
                        <div className="col-md-6">
                            <h4
                                className="mb-3 text-center"
                                style={{
                                    fontSize: '24px', 
                                    fontWeight: 'bold', 
                                    color: 'black', 
                                    letterSpacing: '1px', 
                                    position: 'relative', 
                                    textTransform: 'uppercase', 
                                }}>
                                Payment Details

                                {/* Decorative underline */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80px',
                                    height: '3px',
                                    backgroundColor: '#6C63FF', 
                                    borderRadius: '2px',
                                }}></div>
                            </h4> <br />

                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={formDetails.email}
                                    onChange={handleChange}
                                    required
                                    style={{ padding: '10px', fontSize: '16px', borderRadius: '5px' }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="tel"
                                    name="mobile"
                                    className="form-control"
                                    placeholder="Mobile Number"
                                    pattern="[0-9]{10}"
                                    value={formDetails.mobile}
                                    onChange={handleChange}
                                    required
                                    style={{ padding: '10px', fontSize: '16px', borderRadius: '5px' }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="cardNumber"
                                    className="form-control"
                                    placeholder="Card Number (add 16 no.)"
                                    pattern="[0-9]{16}"
                                    value={formDetails.cardNumber}
                                    onChange={handleChange}
                                    required
                                    style={{ padding: '10px', fontSize: '16px', borderRadius: '5px' }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    name="cvv"
                                    className="form-control"
                                    placeholder="CVV (add 4 no.)"
                                    pattern="[0-9]{4}"
                                    value={formDetails.cvv}
                                    onChange={handleChange}
                                    required
                                    style={{ padding: '10px', fontSize: '16px', borderRadius: '5px' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-outline-secondary w-100 mt-4"
                        style={{
                            padding: '12px',
                            fontSize: '18px',
                            borderRadius: '30px',
                            background: 'linear-gradient(135deg, #6C63FF, #4ECCA3)', 
                            color: 'white', 
                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)', 
                            transition: 'all 0.3s ease', 
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #4ECCA3, #6C63FF)';
                          
                            e.target.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #6C63FF, #4ECCA3)';
                            e.target.style.transform = 'scale(1)'; 
                            e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)'; 
                        }}
                    >
                        Submit Payment
                    </button>

                </form>
            </div>
            <br /><br /><br /> 
        </div>
    );
}
