import React, { Component } from 'react';
import './App.css';
import avatar from './a2.png';
import Page from './Page'

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
        <div className="InfoBox">
          <img src={avatar} className="Avatar" />
          <ul className="InfoList">
            {
              items.map((item) => {
                return (
                  <li>
                    <i>{item.icon}</i>
                    <div className="ItemText">
                      {
                        item.text.map((el) => {
                          return (<span>{el}</span>)
                        })
                      }
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </Page>
    );
  }
}

export default App;
