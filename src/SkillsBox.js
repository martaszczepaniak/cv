import React from 'react';

function SkillsBox({skills, title}) {
  return (
    <div className="SkillsBox">
      <div className="Title">{title}</div>
      <ul className="ProgList">
        {skills.map(skill => <li><b>{skill.name}</b>&nbsp;- {skill.description}</li>)}
      </ul>
    </div>
  )
}

export default SkillsBox;