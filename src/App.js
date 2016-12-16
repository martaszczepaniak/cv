import React, { Component } from 'react';
import './App.css';
import Page from './Page';
import InfoBox from './InfoBox';
import InfoList from './InfoList';
import MainBox from './MainBox';
import EdExpBox from './EdExpBox';
import {personalInfo, educationInfo, experienceInfo} from './data'

class App extends Component {
  render() {
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
