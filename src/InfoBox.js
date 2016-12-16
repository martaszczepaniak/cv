import React from 'react';
import avatar from './a2.png';

function InfoBox({children}) {
  return (
    <div className="InfoBox">
      <img src={avatar} className="Avatar" />
      {children}
    </div>
  )
}

export default InfoBox;
