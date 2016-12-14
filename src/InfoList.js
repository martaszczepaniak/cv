import React from 'react';
import InfoListItem from './InfoListItem'

function InfoList(props) {
  return (
    <ul className="InfoList">
      {
        props.items.map((item) => {
          return (
            <InfoListItem item={item} />
          )
        })
      }
    </ul>
  );
}

export default InfoList;
