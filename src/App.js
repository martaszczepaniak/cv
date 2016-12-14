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
        <div className="MainContent">
          <h4>TITLE</h4>
          <div className="EducationBox"></div>
          <div className="ExperienceBox"></div>
        </div>
      </Page>
    );
  }
}

export default App;
