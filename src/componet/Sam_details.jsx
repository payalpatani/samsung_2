import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { myAction } from './Redux/Action';

export default function Sam_details() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Fetch data from db.json
    useEffect(() => {
        fetchInitialData();
    }, [id]);

    async function fetchInitialData() {
        try {
            const res = await axios.get(`https://db-json-1-0u3w.onrender.com/data/${id}`);
            setProduct(res.data);
        } catch (error) {
            console.error('There was an error fetching the initial data:', error);
            alert('Failed to fetch product details. Please try again later.');
        }
    }

    if (!product) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    function Addtocart() {
        dispatch(myAction(product));
        navigate("/Addtocart");
    }

    return (
        <div className="container my-5 mt-6">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img
                        src={product.img}
                        alt={product.title}
                        className="img-fluid rounded"
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div
                        className="card shadow-sm"
                        style={{
                            borderRadius: '15px',
                            overflow: 'hidden',
                            padding: '20px',
                            border: '1px solid #ddd',
                        }}
                    >
                        <h3 className="card-title" style={{ fontWeight: '600', color: '#333' }}>
                            {product.title}
                        </h3>

                        <del><p className="card-text text-primary mb-2">Old Price: ${product.Oldprice}</p></del>
                        <p className="card-text" style={{ fontSize: '1.2rem', color: 'blue', fontWeight: 'bold' }}>
                            Price :- {product.price}
                        </p>
                        <p className="card-text" style={{ fontSize: '14px', color: 'gray' }}>
                            {product.description}
                        </p>
                        <p className="card-text text-primary  mb-2"><b>Cart ID: {product.cart_id} </b></p>

                        {/* Action Buttons */}
                        <div className="d-flex justify-content-around mt-3">
                            <button className="btn btn-primary" onClick={Addtocart}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
