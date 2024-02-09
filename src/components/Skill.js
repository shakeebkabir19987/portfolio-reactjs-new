import React from "react";
import "./Skillstyles.css";
import CustomButton from "./CustomButton";
import CustomSkill from "./CustomSkill";
import CustomHeading from "./CustomHeading";

const Skill = () => {
  const openpdfCv = () => {
    window.open("/cv.pdf");
  };
  return (
    <div className="mainskill">
      <div className="skill1part">
        {/* one */}
        {/* <h1 className="skillheading">My Creative Skills & Experience</h1> */}
        <CustomHeading title={"My Creative Skills & Experience"} headingstyle={{marginLeft:"0px"}}/>
        <br />
        <p className="skilldescription">
          I am a good Frontend Web Developer and i have a good knowledge in the
          technologies like html, css, JavaScript ,React Js , bootstrap ,jquery,
          github. I have completed many project in web developer. I develop my
          portfolio website using pure html ,css, bootstrap. I develop bootstrap
          website using bootstrap . I develop my uni template using html, css
          ,JavaScript, Bootstrap, Jquery.I develop tour website using html , css
          technologies.I develop the dashboard of a company using html , css ,
          bootstrap. I have completed my bachelor in Computer Science from
          reputed university .I am passionate about web development and goal is
          to achieve good position by doing satisfying work in the IT field ,
          Strongly focused to complete the task.
        </p>
        <br />
        <CustomButton title={"Read More"} openCv={openpdfCv} />
      </div>

      <div className="skill2part">
        {/* second */}

        {/* html */}
        <CustomSkill
          title={"Html"}
          percentage={"90%"}
          backgroundColor={{ backgroundColor: "chartreuse", width: "400px" }}
          titleStyle={{ marginRight: "30px" }}
        />
        <br />

     

         {/* CSS */}
         <CustomSkill
          title={"Css"}
          percentage={"80%"}
          backgroundColor={{ backgroundColor: "chartreuse", width: "350px" }}
          titleStyle={{ marginRight: "40px" }}
        />
        <br />
      {/* javascript*/}

        <CustomSkill
          title={"JavaScript"}
          percentage={"60%"}
          backgroundColor={{ backgroundColor: "chartreuse", width: "300px" }}
          titleStyle={{}}
        />
        <br />

        {/* bootstrap*/}
        <CustomSkill
          title={"BootStrap"}
          percentage={"60%"}
          backgroundColor={{ backgroundColor: "chartreuse", width: "300px" }}
          titleStyle={{}}
        />
        <br />

        {/* reactjs*/}
        <CustomSkill
          title={"ReactJs"}
          percentage={"70%"}
          backgroundColor={{ backgroundColor: "chartreuse", width: "350px" }}
          titleStyle={{ marginRight: "18px" }}
        />
        <br />

        {/* Wordpress*/}
        <CustomSkill
          title={"Hooks"}
          percentage={"65%"}
          backgroundColor={{ backgroundColor: "chartreuse", width: "330px" }}
          titleStyle={{}}
        />
        {/* <br /> */}
      </div>
    </div>
  );
};

export default Skill;
