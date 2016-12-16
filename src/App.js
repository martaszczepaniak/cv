import React, { Component } from 'react';
import './App.css';
import Page from './Page'
import InfoBox from './InfoBox'
import InfoList from './InfoList'
import MainBox from './MainBox'

class App extends Component {
  render() {
    let items = [
      { icon: "perm_identity", text: ["Name"] },
      { icon: "location_on", text: ["Address", "Code and City"] },
      { icon: "email", text: ["email"] },
      { icon: "call", text: ["+99 123 456 789"] },
      { icon: "language", text: ["github.com/", "username"] },
    ]

    return (
      <Page>
        <InfoBox>
          <InfoList items={items}>
          </InfoList>
        </InfoBox>
        <MainBox>
          <h4>CV TITLE</h4>
          <div className="TableTitle">EDUCATION</div>
          <div className="EdExpBox">
            <div className="DurationLocationRow">
              <div className="Date">1234-1234</div>
              <div className="Place">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="DurationLocationRow">
              <div className="Date">1234-1234</div>
              <div className="Place">Lisbon</div>
            </div>
            <div className="DurationLocationRow">
              <div className="Date">1234-1234</div>
              <div className="Place">Lisbon</div>
            </div>
          </div>
          <div className="TableTitle">EXPERIENCE</div>
          <div className="EdExpBox">
            <div className="DurationLocationRow">
              <div className="Date">1234-1234</div>
              <div className="Place">Lisbon</div>
            </div>
            <div className="DurationLocationRow">
              <div className="Date">1234-1234</div>
              <div className="Place">Lisbon</div>
            </div>
          </div>
        </MainBox>
      </Page>
    );
  }
}

export default App;
