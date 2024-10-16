// Priject 1

import './App.css';
import './header.css';
import './Homecss.css';
import './componet/Login.css';
import Header from './componet/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Homepage from './componet/Homepage';
import Footer from './componet/Footer';
import Sam_details from './componet/Sam_details';

import { Route, Routes } from 'react-router-dom';

import AddtoCart from './componet/AddtoCart';
import BuyNow from './componet/BuyNow';
import Thank from './componet/Thank';
import Login from './componet/Login';


function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Addtocart" element={<AddtoCart/>} />
        <Route path="/Buynow" element={<BuyNow/>} />
        <Route path="/Thankyou" element={<Thank/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="Samsungdetails/:id" element={<Sam_details />} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;






