import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CreateTeam extends Component {
    render() {
        return (
            <div>
                Create Team!
                <Link to='/teams'
                      className="view-teams">View Teams</Link>
            </div>

        )
    }
}

export default CreateTeam
