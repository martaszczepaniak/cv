import React, { Component } from 'react';
import './App.css';
import Page from './Page';
import InfoBox from './InfoBox';
import InfoList from './InfoList';
import MainBox from './MainBox';
import EdExpBox from './EdExpBox';
import LanguagesBox from './LanguagesBox';
import SkillsBox from './SkillsBox';
import { title, personalInfo, educationInfo, experienceInfo, languages, skills } from './dataFileExample'

class App extends Component {
  render() {
    return (
      <Page>
        <section className="Upper">
          <InfoBox>
            <InfoList items={personalInfo} />
          </InfoBox>
          <MainBox>
            <h1>{title}</h1>
            <EdExpBox info={educationInfo} title="EDUCATION" />
            <EdExpBox info={experienceInfo} title="EXPERIENCE" />
          </MainBox>
        </section>
        <section className="Lower">
          <SkillsBox skills={skills} title="PROGRAMMING" />
          <LanguagesBox languages={languages} title="LANGUAGES" />
        </section>
      </Page >
    );
  }
}

export default App;
