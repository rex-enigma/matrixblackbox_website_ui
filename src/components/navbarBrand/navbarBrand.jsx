import React from "react";
import logo_w from "../../assets/matrix-blackbox-iot-tracking-solutions-logo-hover_2020.png";
import {Link} from 'react-router-dom';
import './style.css';

export default function NavbarBrand() {
  return (
    <div className="navbar_brand">
      <Link className="navbar_logo" to ='/'>
        <img src={logo_w} style={{ width: "40px", height: "40px" }} alt=""></img>
        <h5>MATRIX BLACKBOX</h5>
      </Link>
    </div>
  );
}
