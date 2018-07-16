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
                // <li>{team.players.name}</li>
                <p>
                John Doe <br />
                Jane Doe <br />
                John Doe <br />
                Jane Doe <br />
                John Doe <br />
                Jane Doe <br />
                </p>
              </div>
            </div>
          </div>
        ))}
      </li>
  }
}

export default TeamList
