import React from 'react';
import avatar from './avatar.png';

function InfoBox({children}) {
  return (
    <div className="InfoBox">
      <img src={avatar} className="Avatar" alt="Avatar" />
      {children}
    </div>
  )
}

export default InfoBox;
