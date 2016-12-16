import React from 'react';
import InfoListItem from './InfoListItem'

function InfoList({items}) {
  return (
    <ul className="InfoList">
      {items.map((item, index) => <InfoListItem key={index} item={item} />)}
    </ul>
  );
}

export default InfoList;
