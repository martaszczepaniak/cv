import React from 'react';

function InfoListItem({item: {icon, text}}) {
  return (
    <li>
      <i className="info-icon small material-icons">{icon}</i>
      <div className="ItemText">
        {text.map(el => <span>{el}</span>)}
      </div>
    </li>
  );
}

export default InfoListItem;