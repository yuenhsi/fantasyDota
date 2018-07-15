import React, { Component } from 'react';
import TeamList from './TeamList'

const teams = [
    { name: 'Virtus Pro' },
    { name: 'Team Liquid' },
    { name: 'PSG.LGD' },
    { name: 'Team Secret' },
    { name: 'Mineski' },
    { name: 'Vici Gaming' },
    { name: 'Newbee' },
    { name: 'VGJ.Thunder' }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <TeamList teams={teams}/>
      </div>
    );
  }
}

export default App;
