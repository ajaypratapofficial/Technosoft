import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Address:-

        Building apt c25, central market, lajpat nagar, delhi, 110024</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/technosoft_hunter/" target="_blank">
          <Insta color="white" size={"3rem"} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100094556154529" target="_blank">
          <Facebook color="white" size={"3rem"} />
        </a>

          {/* <Gitub color="white" size={"3rem"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
