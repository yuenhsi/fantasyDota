import React, { Component } from 'react';

class TeamList extends Component {
  render() {
      const teams = this.props.teams

      return <li className="TeamListli">
        {teams.map(team => (
          <div className="container">
            <h3 key={team.name}>{team.name}</h3>
            <img className={"container" + team.team_id + "img"} src={team.logo_url} />

            <div className="overlay">
              <div className="playerNames">
              <br/>
              <h5>{team.players[0].name}</h5>
              <h5>{team.players[1].name}</h5>
              <h5>{team.players[2].name}</h5>
              <h5>{team.players[3].name}</h5>
              <h5>{team.players[4].name}</h5>
              </div>
            </div>
            
          </div>
        ))}
      </li>
  }
}

export default TeamList
