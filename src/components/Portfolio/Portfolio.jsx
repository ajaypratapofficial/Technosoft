import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import Rahul from "../../img/Rahul.jpg";
import Shruiti from "../../img/shuti.jpg";
import Hemant from "../../img/Hemant.jpg";
import Pratik from "../../img/Pratik.jpg";
import Rittika from "../../img/Rittika.jpg";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import Seo from "../SEO/Seo";
import MusicApp from "../../img/musicapp.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
        <Seo
      title="Techno Soft Hunter Team"
      description=""
      keyboards=""
      author=""
    >
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>TechnoSoftHunter</span>
      <span>Team</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Rahul} alt="" />
          <div>Rahul (CEO & Admin)</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Shruiti} alt="" />
          <div>Shruti Saxena (Assistant Director)</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hemant} alt="" />
          <div>Hemant Rana (Founder & Owner)</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pratik} alt="" />
          <div>Pratik Malhotra (General Manager)</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Rittika} alt="" />
          <div>Rittika Pal Singh (Assistant director & Cofounder)</div>
        </SwiperSlide>
      </Swiper>
    </div>
    </Seo>
    </>
  );
};

export default Portfolio;
