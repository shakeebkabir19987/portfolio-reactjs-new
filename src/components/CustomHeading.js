import React from 'react'
import "./CustomHeadingStyles.css"

const CustomHeading = ({title, headingstyle}) => {
  return (
    <>
    {/* second heading */}
    <h1 className="heading2" style={headingstyle}>{title}</h1>
    </>
  )
}

export default CustomHeading
