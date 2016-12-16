import React, { Component } from 'react';
import './App.css';
import Page from './Page'
import InfoBox from './InfoBox'
import InfoList from './InfoList'

class App extends Component {
  render() {
    let items = [
      { icon: "a", text: ["Name"] },
      { icon: "b", text: ["Address", "Code and City"] },
      { icon: "c", text: ["email"] },
      { icon: "d", text: ["+99 123 456 789"] },
      { icon: "e", text: ["github.com/", "username"] },
    ]

    return (
      <Page>
        <InfoBox>
          <InfoList items={items}>
          </InfoList>
        </InfoBox>
        <div className="MainBox">
          <h4>CV TITLE</h4>
          <div className="EducationBoxTitle">EDUCATION</div>
          <div className="EducationBox">
            <div className="Duration">
              <div className="Date">1234-1234</div>
              <div className="Date">1234-1234</div>
              <div className="Date">1234-1234</div>
            </div>
            <div className="Location">
              <div className="Place">Lisbon</div>
              <div className="Place">Praha</div>
              <div className="Place">NY</div></div>
          </div>
          <div className="ExperienceBoxTitle">EXPERIENCE</div>
          <div className="ExperienceBox">
            <div className="Duration">
              <div className="Date">1234-1234</div>
              <div className="Date">1234-1234</div>
            </div>
            <div className="Location">
              <div className="Place">Madrid</div>
              <div className="Place">Paris</div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default App;
