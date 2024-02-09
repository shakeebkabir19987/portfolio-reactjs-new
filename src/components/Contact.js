import React from "react";
import "./Contactstyles.css";
// import imgemail from "../images/email.jpg";
import imgemail from "../images/email.jpg";
import imglinkin from "../images/linkin.png";
import imggithub from "../images/git.png";
import imgwhatsap from "../images/whatsap.png";
import cv from "../images/cvimg.jpg";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import CustomHeading from "./CustomHeading";
import Login from "./CustomContactform";
import { useState } from "react";

const Contact = () => {
  const submitfunc = () => {
    alert("Your data is Successfully Submitted");
  };
  const openpdfCv = () => {
    window.open("/cv.pdf");
  };
  return (
    <div className="maincontact">
      {/* contact */}
      <div className="contact1">
        <CustomHeading title={"Contact Me"} headingstyle={{marginLeft:"0px"}}/>
        <br />
        <br />

        {/* email icon */}
        <div>
          <img src={imgemail} alt="" className="emailicon" />
          <span className="email">
            <Link to="https://mail.google.com/mail" target="_blank">
              shakeebkabirkhan1@gmail.com
            </Link>
          </span>
        </div>
        <br />
      
        {/* linkin icon */}

        <div>
          <img src={imglinkin} alt="" className="linkinicon" />
          <span className="linkin">
            <Link to="https://www.linkedin.com/" target="_blank">
              Linkin.com/19987
            </Link>
          </span>
        </div>

        <br />
        {/* Github icon */}

        <div>
          <img src={imggithub} alt="" className="githubicon" />
          <span className="github">
            <Link to="https://github.com/" target="_blank">
              github.com/19987
            </Link>
          </span>
        </div>
        <br />
        {/* whatsap icon */}
        <div>
          <img src={imgwhatsap} alt="" className="whatsapicon" />
          <span className="whatsap">
            <Link to="https://www.linkedin.com/" target="_blank">
              03160982239
            </Link>
          </span>
        </div>
        <br />

        <CustomButton title={"Download CV"} openCv={openpdfCv} />

        <br />
      </div>

      
     {/* form validation with youtube start */}

     {/* Contact form    */}
       <Login />

     {/* form validation with youtube End */}


    </div> 
  );
};

export default Contact;
