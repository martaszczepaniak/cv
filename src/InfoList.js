import React from 'react';
import InfoListItem from './InfoListItem'

function InfoList({items}) {
  return (
    <ul className="InfoList">
      {items.map(item => <InfoListItem item={item} />)}
    </ul>
  );
}

export default InfoList;
