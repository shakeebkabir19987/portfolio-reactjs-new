import React from "react";
import "./Aboutstyles.css";
import img2 from "../images/profile2.png";
import CustomButton from "./CustomButton";
import CustomHeading from "./CustomHeading";

const About = () => {
  const openCv = () => {
    window.open("/cv.pdf");
  };
  return (
    <div className="mainabout">
      <div className="about1part">
        <img src={img2} alt="" className="image2" />
      </div>

      <div className="about2part">
        {/* second */}
        {/* <h1 className="abouth1">About Me</h1> */}
        <CustomHeading title={"About Me"} headingstyle={{marginLeft:'248px'}}/>
        <h4 className="abouth2">---who i am---</h4>
        <br />
        <h2 className="abouth3">I'm Shakeeb & I'm a frontend Web Developer</h2>
        <br />
        <p className="aboutdescription">
          Hello to everyone.My name is Shakeeb kabir I have completed my
          bachelor in Computer Science from reputed university .I am passionate
          about web development and goal is to achieve good position by doing
          satisfying work in the IT field , Strongly focused to complete the
          task. I am a good Frontend Web Developer and i have a good knowledge
          in the technologies like html, css, JavaScript ,React js, bootstrap
          ,jquery. I have completed many project in web developer. I develop my
          portfolio website using pure html ,css. I develop tour website using
          html , css technologies.I develop the dashboard of any company using
          html , css , bootstrap. I develop bootstrap website using bootstrap .
          I develop my uni templete using html, css ,JavaScript, Bootstrap,
          Jquery.
        </p>

        <br />

        <CustomButton title={"My Resume"} openCv={openCv} />
      </div>
    </div>
  );
};

export default About;
