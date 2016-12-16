import React from 'react';

function EdExpBox({title, info}) {
  return (
    <div className="EdExpBox">
      <div className="Title">{title}</div>
      {
        info.map(({duration, text}, index) => (
          <div className="DurationLocationRow" key={index}>
            <div className="Duration">
              <div className="Date">{duration}</div>
            </div>
            <ul className="Place">
              {text.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export default EdExpBox;
