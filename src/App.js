import React, { Component } from 'react';
import './App.css';
import Page from './Page';
import InfoBox from './InfoBox';
import InfoList from './InfoList';
import MainBox from './MainBox';
import EdExpBox from './EdExpBox';

class App extends Component {
  render() {
    let personalInfo = [
      { icon: "perm_identity", text: ["Name"] },
      { icon: "location_on", text: ["Address", "Code and City"] },
      { icon: "email", text: ["email"] },
      { icon: "call", text: ["+99 123 456 789"] },
      { icon: "language", text: ["github.com/", "username"] },
    ]

    let educationInfo = [
      { duration: "2000 - 3000", location: "Warsaw" },
      { duration: "1000 - 5000", location: "Berlin" },
      { duration: "1800 - 2500", location: "Budapest" },
    ]

    let experienceInfo = [
      { duration: "2000 - 3000", location: "Warsaw" },
      { duration: "1000 - 5000", location: "Berlin" },
      { duration: "1800 - 2500", location: "Budapest" },
    ]

    return (
      <Page>
        <InfoBox>
          <InfoList items={personalInfo} />
        </InfoBox>
        <MainBox>
          <h1>CV TITLE</h1>
          <EdExpBox info={educationInfo} title="EDUCATION" />
          <EdExpBox info={experienceInfo} title="EXPERIENCE" />
        </MainBox>
      </Page>
    );
  }
}

export default App;
