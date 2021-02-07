import React, { Component } from 'react';
import '../assest/Css/services.css';
import {FaHeart} from "react-icons/fa";
import {FaCookie} from "react-icons/fa";
import {RiCake3Line} from "react-icons/ri";
import {GiDonut} from "react-icons/gi";

class Services extends Component {
  render() {
    return (
<div className="services">
<h1>our services</h1>
<div className="cen">
   <div className="service">
   <div><GiDonut size={50}  style={{ marginBottom:'30px'}} /></div>
   <h3>Dounts</h3>
   <p>Get The Best Recipe For Dounts From Our Website! </p>
    </div>
    <div className="service">
    <div><RiCake3Line size={50}  style={{ marginBottom:'30px'}} /></div>
    <h3>CupCake</h3>
   <p>Get The Best Recipe For CupCake From Our Website!</p>
    </div>
    <div className="service">
    <div>< FaCookie size={50}  style={{ marginBottom:'30px'}} /></div>
    <h3>Cookies</h3>
   <p>Get The Best Recipe For Cookies From Our Website! </p>
    </div>
   
</div>
</div>
    )
       
}
}

export default Services ;