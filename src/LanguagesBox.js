import React from 'react';

function LanguagesBox({languages, title}) {
  return (
    <div className="LanguagesBox">
      <div className="Title">{title}</div>
      <ul className="LanguageList">
        {languages.map(language => <li>{language.name}&nbsp;- {language.level}</li>)}
      </ul>
    </div>
  )
}

export default LanguagesBox;