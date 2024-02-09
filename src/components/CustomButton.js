import React from "react";
import "./CustomButtonstyles.css";

const CustomButton = ({ title, openCv, style }) => {
  return (
    <div>
      <button className="btn1" onClick={openCv} style={style}>
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
