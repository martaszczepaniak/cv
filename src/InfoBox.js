import React from 'react';
import avatar from './a2.png';

function InfoBox(props) {
  return (
    <div className="InfoBox">
      <img src={avatar} className="Avatar" />
      {props.children}
    </div>
  )
}

export default InfoBox;
