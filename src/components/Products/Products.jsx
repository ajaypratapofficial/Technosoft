import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Products.css";
import Seo from "../SEO/Seo";
const Products = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <Seo
      title="Techno Soft Hunter Products"
      description="Techno Soft Hunter Product"
      keyboards="Techno Soft Hunter, Techno Soft Hunter Product"
      author=""
    >
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8+</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Work</span>
      </div>
    </div>
    </Seo>
    </>
  );
};

export default Products;
