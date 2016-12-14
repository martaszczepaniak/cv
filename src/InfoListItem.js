import React from 'react';

function InfoListItem(props) {

  return (
    <li>
      <i>{props.item.icon}</i>
      <div className="ItemText">
        {
          props.item.text.map((el) => {
            return (<span>{el}</span>)
          })
        }
      </div>
    </li>
  );
}

export default InfoListItem;