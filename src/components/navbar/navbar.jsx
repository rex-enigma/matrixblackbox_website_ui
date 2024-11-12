import React from "react";
import NavbarBrand from "../navbarBrand/navbarBrand";
import {Link} from 'react-router-dom';
import "./style.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavbarBrand />
      <div className="navigators">
        <NavLink linkName="link home" to='/' linkId="home_container">
          HOME
        </NavLink>
        <NavLink linkName="link features"  to='/features' linkId="features_container">
          FEATURES
        </NavLink>
        <NavLink linkName="link uses"  to='/uses' linkId="uses_container">
          USES
        </NavLink>
        <NavLink linkName="link business"  to='/business' linkId="business_container">
          BUSINESS
        </NavLink>
        <NavLink linkName="link blog"  to='/blog' linkId="blog_container">
          BLOG
        </NavLink>
        <NavLink linkName="link resources"  to='/resources' linkId="resources_container">
          RESOURCES
        </NavLink>
        <NavLink linkName="link portal" to='/'  linkId="portal_container">
          PORTAL
        </NavLink>
      </div>
    </div>
  );
}


function NavLink(props) {
  return (
    <div id={props.linkId}>
      <Link className={props.linkName} to={props.to}>
      {props.children}
      </Link>
    </div>
  );
}



