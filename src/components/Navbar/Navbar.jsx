import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">TechnoSoftHunter</div>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            {/* to delete the circle */}
            <li>
              <Link activeClass="active" to="/" spy={true} smooth={true}>
                Home
              </Link>
              {/* <Link to="/">Home</Link> */}
              {/* //! this will also work this is correct way */}
            </li>
            
            <li>
              <Link to="services" spy={true} smooth={true}>
              Services
              </Link>
            </li>
            <li>
              <Link to="team" spy={true} smooth={true}>
                Team
              </Link>
            </li>
            <li>
              <Link to="aboutus" spy={true} smooth={true}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button 
        className="button n-button"
        onClick={() => navigate("/contact")} // Navigate to the Contact page on button click
        >Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
