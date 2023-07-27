import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import Seo from "../SEO/Seo";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    // <div className="t-wrapper" id="testimonial">
    //   <div className="t-heading">
    //     <span>Clients always get </span>
    //     <span>Exceptional Work </span>
    //     <span>from me...</span>
    //   <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
    //   <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

    //   </div>
    //   <Swiper
    //     // install Swiper modules
    //     modules={[Pagination]}
    //     slidesPerView={1}
    //     pagination={{ clickable: true }}
    //   >
    //     {clients.map((client, index) => {
    //       return (
    //         <SwiperSlide key={index}>
    //           <div className="testimonial">
    //             <img src={client.img} alt="" />
    //             <span>{client.review}</span>
    //           </div>
    //         </SwiperSlide>
    //       );
    //     })}
    //   </Swiper>
    // </div>
    <>
    <Seo
      title="Techno Soft Hunter About Us"
      description=""
      keyboards=""
      author=""
    >
          <div className="awesome">
        {/* dark mode */}
        <span >ABOUT US </span>
        <span>Welcome to Technosoft Hunter :</span>
        <spane>
        Your ultimate destination for cutting-edge software solutions! We are a leading software development company that specializes in providing top-notch software-as-a-service (SaaS) solutions to businesses across various industries. With our expertise and passion for innovation, we strive to empower organizations with advanced technology solutions that drive growth and optimize operations.



          <br /><br />
          At Technosoft Hunter, we understand that in today's fast-paced digital landscape, having the right software can make all the difference in achieving your business goals. Our team of skilled developers, engineers, and designers are dedicated to delivering tailor-made software solutions that cater to your unique requirements and challenges. Whether you need a comprehensive enterprise application, a scalable mobile app, providing digital marketing services or a robust cloud-based platform, we have the expertise and experience to bring your vision to life.
          <br /><br />
          We take pride in our commitment to quality and customer satisfaction. We follow industry best practices and employ the latest technologies to develop reliable, secure, and user-friendly software solutions. Our agile development approach ensures that we deliver projects on time and within budget, without compromising on quality.
          <br /><br />
          At Technosoft Hunter, we believe in building long-term partnerships with our clients. We go beyond just delivering a product by providing ongoing support, maintenance, and updates to ensure that your software remains efficient, secure, and up-to-date. Our dedicated team of experts is always available to address your queries, provide technical assistance, and help you make the most of your software investment.
<br /><br />
We invite you to explore our website and discover the range of software services we offer. Whether you are a startup looking to establish a digital presence, a small business seeking to streamline operations, or an enterprise aiming to enhance productivity, Technosoft Hunter is here to help you achieve your goals. Join hands with us and experience the power of technology to transform your business.
<br /><br />
Contact us today to discuss your software requirements and embark on a journey towards digital success with Technosoft Hunter! 

        </spane>
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

<br />
<br />
</Seo>
    </>
  );
};

export default Testimonial;
