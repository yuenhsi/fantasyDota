import React, { Component } from 'react';

class TeamList extends Component {
  render() {
      const teams = this.props.teams

      return <li className="TeamListli">
        {teams.map(team => (
          <div className={"container" + team.team_id}>
            <h3 key={team.name}>{team.name}</h3>
            <img class="img_img" src={team.logo_url} />
            <div className="img_description_layer">
              <p className="img_description">Testing</p>
            </div>
          </div>
        ))}
      </li>
  }
}

export default TeamList
