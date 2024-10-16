import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { decrement, increment, removeFromCart } from '../componet/Redux/Action';
import { useNavigate } from 'react-router-dom';


export default function AddtoCart() {
    const navigate = useNavigate();
  

    const data = useSelector((store) => store);
    const dispatch = useDispatch();

    const handleRemove = (index) => {
        dispatch(removeFromCart(index));
    };

    const totalPrice = data.reduce((acc, item) => acc + item.price * item.quantity, 0);

    function buyNow(){
       
        navigate("/Buynow")
    }

    return (
        <div className="container my-5">
            {/* Enhanced Heading */}
            <h2 className="text-center mb-4 position-relative">
                Your Cart
                <div className="position-absolute bg-dark" style={{ height: '4px', width: '60px', bottom: '-10px', left: '50%', transform: 'translateX(-50%)' }}></div>
            </h2>

            {/* Cart Items */}
            <div className="row">
                {data.map((el, i) => (
                    <div key={i} className="col-md-12 mb-4">
                        <div className="card shadow-lg border-light rounded">
                            <div className="row g-0">
                                <div className="col-md-4 d-flex justify-content-center align-items-center p-4">
                                    <img
                                        src={el.img}
                                        alt={el.title}
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="col-md-8 d-flex flex-column justify-content-center p-4">
                                    <h5 className="card-title text-dark fw-bold mb-2">{el.title}</h5>
                                 
                                    <p className="card-text text-primary fs-5 mb-2">Price: ${el.price}</p>
                                  
                                    <p className="card-text text-muted mb-3">{el.description}</p>

                                    {/* Quantity Increment/Decrement */}
                                    <div className="d-flex align-items-center mt-2 justify-content-center">
                                        <button className="btn btn-outline-secondary   px-4 py-0 border-2 border-dark " onClick={() => dispatch(decrement(i))}>
                                            <span className="fs-4 fw-bold">-</span>
                                        </button>
                                        <span className="mx-3 fs-4 fw-bold text-dark" style={{ minWidth: '40px', textAlign: 'center' }}>
                                            {el.quantity}
                                        </span>
                                        <button className="btn btn-outline-secondary  px-4 py-0 border-2 border-dark" onClick={() => dispatch(increment(i))}>
                                            <span className="fs-4 fw-bold">+</span>
                                        </button>
                                    </div>

                                    {/* Total Price */}
                                    <h4 className='text-primary mt-4'> <b>Total Price: <span >{totalPrice.toFixed(2)} </span> </b> </h4>


                                    {/* Action Buttons */}
                                    <div className="d-flex mt-4  justify-content-center align-items-center">
                                        <button
                                            className="btn btn-danger me-3 rounded-pill px-4 py-2"
                                            onClick={() => handleRemove(i)}
                                        >
                                            Remove
                                        </button>
                                        <button className="btn btn-success rounded-pill px-4 py-2" onClick={buyNow} >
                                            Proceed to Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>  
    );
}
