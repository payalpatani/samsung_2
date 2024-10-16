import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [formVisible, setFormVisible] = useState(false);

  const handleSearchClick = () => {
    setFormVisible(!formVisible);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
       
      <Link to={"/"} style={{textDecoration:"none"}}><a className="navbar-brand fw-bold" href="#" style={{fontSize:"21px", textDecoration:"none"}}> SAMSUNG </a></Link>

       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
           
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" id="shopDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <div className="dropdown-menu mega-menu p-4" aria-labelledby="shopDropdown">
                <div className="row">
                  <div className="col-md-4">
                    <h6>Category 1</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Subcategory 1</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 2</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 3</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>Category 2</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Subcategory 4</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 5</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 6</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>Category 3</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Subcategory 7</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 8</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 9</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* AI Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" id="aiDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                AI
              </a>
              <ul className="dropdown-menu" aria-labelledby="aiDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            {/* Mobile Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" id="mobileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mobile
              </a>
              <ul className="dropdown-menu" aria-labelledby="mobileDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            {/* TV&AV Dropdown with Mega Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" id="tvavDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                TV&AV
              </a>
              <div className="dropdown-menu mega-menu p-4" aria-labelledby="tvavDropdown">
                <div className="row">
                  <div className="col-md-4">
                    <h6>Category 1</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Subcategory 1</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 2</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 3</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>Category 2</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Subcategory 4</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 5</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 6</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>Category 3</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Subcategory 7</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 8</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 9</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Computing Dropdown with Mega Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" id="computingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Computing
              </a>
              <div className="dropdown-menu mega-menu p-4" aria-labelledby="computingDropdown">
                <div className="row">
                  <div className="col-md-4">
                    <h6>Category 1</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Subcategory 1</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 2</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 3</a></li>
                    </ul>
                    <img src="https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1725148800&semt=ais_hybrid" alt="Category 1" className="img-fluid mt-2" />
                  </div>
                  <div className="col-md-4">
                    <h6>Category 2</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Subcategory 4</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 5</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 6</a></li>
                    </ul>
                    <img src="https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg" alt="Category 2" className="img-fluid mt-2" />
                  </div>
                  <div className="col-md-4">
                    <h6>Category 3</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Subcategory 7</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 8</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 9</a></li>
                    </ul>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmVVOa-fgjpdMFKcxNeyBuHEio03h7E-80DX2OI5O26mWSKiROube6LY5W3LKK6UkCIc&usqp=CAU" alt="Category 3" className="img-fluid mt-2" />
                  </div>
                </div>
              </div>
            </li>

            {/* Accessories Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="accessoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Accessories
              </a>
              <ul className="dropdown-menu" aria-labelledby="accessoriesDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            {/* Home Appliance Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" id="homeApplianceDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home Appliance
              </a>
              <ul className="dropdown-menu" aria-labelledby="homeApplianceDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            {/* Display Dropdown with Mega Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" id="displayDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Display
              </a>
              <div className="dropdown-menu mega-menu p-4" aria-labelledby="displayDropdown">
                <div className="row">
                  <div className="col-md-4">
                    <h6>Category 1</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Subcategory 1</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 2</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 3</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>Category 2</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Subcategory 4</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 5</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 6</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>Category 3</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Subcategory 7</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 8</a></li>
                      <li><a className="dropdown-item" href="#">Subcategory 9</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* SmartThings Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="smartThingsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                SmartThings
              </a>
              <ul className="dropdown-menu" aria-labelledby="smartThingsDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            {/* AirConditioners Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" id="airConditionersDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                AirConditioners
              </a>
              <ul className="dropdown-menu" aria-labelledby="airConditionersDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>

          {/* Icons and Search */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" id="supportDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Support
              </a>
              <ul className="dropdown-menu" aria-labelledby="supportDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">For Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleSearchClick} style={{fontWeight:"normal"}}>
                <i className="fas fa-search"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{fontWeight:"lighter"}}>
                <i className="fas fa-shopping-cart" ></i>
              </a>
            </li>
          <Link to={"/Login"}>  <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-user"></i>
              </a>
            </li>
          </Link>
          </ul>
        </div>
      </div>

      {/* Search Form */}
      {formVisible && (
        <div className="container-fluid position-absolute top-100 end-0 p-3" style={{ background: 'white', border: '1px solid #ddd', borderRadius: '4px', zIndex: '1000', width: '100%', maxWidth: '300px' }}>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}
