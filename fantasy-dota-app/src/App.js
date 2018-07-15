import React, { Component } from 'react';
import TeamList from './TeamList'
import CreateTeam from './CreateTeam'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


var teams = require('./teams.json')
var heroes = require('./heroes.json')

class App extends Component {
  state = {
    screen: 'teams'
  }
  render() {
    return (
      <div className="App">
        <Link to='/teams'
              className='view-teams'>View TI8 Teams</Link>
       <br/>
       <Link to='/create'
             className='create-team'>Create Team</Link>
        <Route exact path='/teams' render={() =>  (
          <TeamList teams={teams}/>
        )}/>
        <Route path='/create' component={CreateTeam}/>
      </div>
    );
  }
}

export default App;
