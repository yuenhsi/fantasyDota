import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

var players = require('./players.json')

class CreateTeam extends Component {
    state = {
        selectedOption: '',
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption })
    }
    render() {
        const { selectedOption } = this.state;

        return (
            <div className="create-team-container">
                Create Your Fantasy League

                <div className="create-team-form">
                    <Select
                      name="form-field-name"
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={players} />
                </div>
            </div>

        )
    }
}

export default CreateTeam
