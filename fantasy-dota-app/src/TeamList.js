import React, { Component } from 'react';

class TeamList extends Component {
  render() {
      const teams = this.props.teams

      return <ol>
        {teams.map(team => (
          <div>
            <li key={team.name}>{team.name}</li>
            <img src={team.logo_url} />
          </div>
        ))}
      </ol>
  }
}

export default TeamList
