import React from "react";
import "./Heroimgstyles.css";
import img1 from "../images/profile1.jpg";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import CustomHeading from "./CustomHeading";

const Heroimg = () => {
  const openpdfCv = () => {
    window.open("/cv.pdf");
  };
  
  return (
    <div className="mainbanner">
      {/* first heading */}
      <h1 className="heading1">
        Hello, I am <span className="name"> Shakeeb </span>
      </h1>
      
      {/* second heading */}
      <CustomHeading title={"FrontEnd Web Developer"}/>
    

      {/* description */}
     
      <CustomHeading title={"I am FrontEnd Developer with Html,Css, JavaScript, Bootstrap, React Js"} headingstyle={{marginLeft: "100px",
    fontSize:"large" , marginTop:"10px"}}/>

      <CustomButton
        title={"Hire Me"}
        openCv={openpdfCv}
        style={{ color: "white", marginLeft: "280px", marginTop: "20px" }}
      />

      {/* image-heroimg */}
      <img src={img1} alt="" className="image1" />
    </div>
  );
};

export default Heroimg;
