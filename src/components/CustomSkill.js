import React from 'react'
import "./CustomSkillstyles.css"
const CustomSkill = ({title, percentage, backgroundColor, titleStyle}) => {
  return (
    <div>
      <b  className='skillName' style={titleStyle}>{title}</b>
    <b  className='percentage' >{percentage} </b>
    <div className='innerSkill'>
        <div className='innermostSkill' style={backgroundColor}></div>
    </div>
    </div>
    
    
  )
}

export default CustomSkill
