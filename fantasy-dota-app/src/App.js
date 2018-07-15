import React, { Component } from 'react';
import TeamList from './TeamList'
import CreateTeam from './CreateTeam'

var teams = require('./teams.json')
var heroes = require('./heroes.json')

class App extends Component {
  state = {
    screen: 'teams'
  }
  render() {
    return (
      <div className="App">
        <a href='#teams'
           onClick={(e) => this.setState({ screen: 'teams' })}
           className='view-teams'>View TI8 Teams</a>
       <br/>
       <a href='#create'
          onClick={(e) => this.setState({ screen: 'create' })}
          className='create-team'>Create Team</a>
        {this.state.screen === 'teams' &&  (
          <TeamList teams={teams}/>
        )}

        {this.state.screen === 'create' && (
          <CreateTeam/>
        )}
      </div>
    );
  }
}

export default App;
