import React from 'react';

function EdExpBox({title, info}) {
  return (
    <div className="EdExpBox">
      <div className="Title">{title}</div>
      {
        info.map(({duration, location}) => (
          <div className="DurationLocationRow">
            <div className="Duration">
              <div className="Date">{duration}</div>
            </div>
            <div className="Place">{location}</div>
          </div>
        ))
      }
    </div>
  )
}

export default EdExpBox;
