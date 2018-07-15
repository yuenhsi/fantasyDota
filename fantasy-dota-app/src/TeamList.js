import React, { Component } from 'react';

class TeamList extends Component {
  render() {
      const teams = this.props.teams

      return <ol>
        {teams.map(team => (
            <li key={team.name}>{team.name}</li>
        ))}
      </ol>
  }
}

export default TeamList
