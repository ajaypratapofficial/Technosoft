import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Products from "./components/Products/Products";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Router>
      <div
        className="App"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Intro />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/works" element={<Works />} /> */}
          <Route path="/team" element={<Portfolio />} />
          <Route path="/aboutus" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
