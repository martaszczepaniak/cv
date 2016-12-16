import React from 'react';
import Icon from './Icon';

function InfoListItem({item: {icon, text}}) {
  return (
    <li>
      <Icon name={icon} />
      <div className="ItemText">
        {text.map((el, index) => <span key={index}>{el}</span>)}
      </div>
    </li>
  );
}

export default InfoListItem;