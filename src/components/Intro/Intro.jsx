import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import TechnosoftHunterlogos from "../../img/Technosoft Hunter-logos.png";

// import boy from "../../img/boy.png";
// import glassesimoji from "../../img/glassesimoji.png";
// import thumbup from "../../img/thumbup.png";
// import crown from "../../img/crown.png";
// import FloatinDiv from "../FloatingDiv/FloatingDiv";
// import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";
import Seo from "../SEO/Seo";
// import Navbar from "../Navbar/Navbar";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
    <Seo
      title="Techno Soft Hunter"
      description="Techno Soft Hunter"
      keyboards="Techno Soft Hunter, Techno Soft Hunter"
      author=""
    >
    {/* <Navbar/> */}
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>We are </span>
          <span>Techno Soft Hunter</span>
          <span>
          Welcome to Technosoft Hunter, your ultimate destination for comprehensive software development solutions and digital marketing services. As a cutting-edge technology company, we specialize in delivering a wide range of services, including software development, machine learning, artificial intelligence, blockchain solutions, and web and app designing. With a strong focus on innovation, quality, and customer satisfaction, we are dedicated to helping businesses harness the power of technology to achieve their goals.
<br /><br />
At Technosoft Hunter, we understand the critical role that technology plays in today's fast-paced and digitally-driven world. We recognize that businesses need to stay ahead of the competition by leveraging the latest technological advancements. That's why we offer a diverse portfolio of services that cater to the unique needs of each client.
<br /><br />

One of our core strengths lies in software development. Our team of experienced and skilled software engineers possesses deep expertise in creating robust, scalable, and customized software solutions. Whether you need a web application, a mobile app, or a desktop software, we can transform your ideas into reality. By combining our technical prowess with a deep understanding of your business requirements, we deliver software solutions that are tailored to your specific needs.
<br /><br />

In addition to software development, we excel in the fields of machine learning and artificial intelligence (AI). With the exponential growth of data, businesses have an unprecedented opportunity to extract valuable insights and make data-driven decisions. Our team of data scientists and AI experts can help you harness the power of machine learning and AI algorithms to unlock the true potential of your data. From predictive analytics to natural language processing and computer vision, we can develop intelligent systems that enhance your business operations and drive innovation.
<br /><br />

Moreover, we are at the forefront of blockchain technology. Blockchain has revolutionized various industries by providing secure, transparent, and decentralized solutions. Our expertise in blockchain development enables us to build smart contracts, decentralized applications (DApps), and blockchain-based solutions tailored to your industry. Whether you are in finance, supply chain, healthcare, or any other sector, we can help you harness the power of blockchain to optimize your processes and enhance security.
<br /><br />

At Technosoft Hunter, we also offer comprehensive digital marketing services to help businesses establish a strong online presence and reach their target audience effectively. From search engine optimization (SEO) and social media marketing to content creation and online advertising, we develop result-oriented strategies to boost your brand visibility, increase website traffic, and drive conversions. Our digital marketing experts stay updated with the latest trends and algorithms to ensure that your business stays ahead in the digital landscape.
<br /><br />

Furthermore, our web and app designing services combine creativity with functionality to deliver engaging and user-friendly digital experiences. Whether you need a visually stunning website or a seamless mobile app, our designers and developers collaborate to create intuitive interfaces that captivate your audience and drive user engagement.
<br /><br />

At Technosoft Hunter, we are committed to delivering excellence in every project we undertake. We prioritize understanding your business objectives and work closely with you to ensure that our solutions align with your vision. Our team of professionals adopts a collaborative approach, keeping you involved throughout the development process, from concept to implementation.
<br /><br />

With our dedication to innovation, technical expertise, and customer-centric approach, Technosoft Hunter is your trusted partner for all your software development, digital marketing, and technology needs. Let us help you stay ahead in the digital era and achieve remarkable success. Contact us today to embark on a transformative journey towards technological excellence. 
          </span>
        </div>
        {/* <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Learn More</button>
        </Link> */}
        {/* social icons */}
        <div className="i-icons">
          <a href="https://www.linkedin.com/company/96159924/admin/feed/posts/" target="_blank">
  <img src={LinkedIn} alt="LinkedIn" width="100" height="100"/>
</a>
<a href="https://www.instagram.com/technosoft_hunter/" target="_blank">
  <img src={Instagram} alt="Instagram" width="100" height="100"/>
</a>
</div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img 
        // style={{ display: "none" }} 
        style={{ 
          borderRadius: "100%",
          height:"50rem"
         }} 
        src={TechnosoftHunterlogos} alt="" />
        {/* <img 
        // style={{ display: "none" }} 
        src={Vector2} alt="" />
        <img 
        // style={{ display: "none" }} 
        src={boy} alt="" /> */}

        {/* animation */}
        {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        /> */}

        {/* <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div> */}

        {/* animation */}
        {/* <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div> */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
    </Seo>
    </>
  );
};

export default Intro;
