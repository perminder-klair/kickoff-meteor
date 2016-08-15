import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

export default class DashboardPage extends Component {
    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">Welcome to Meteor</h1>
                <p>This is a starting point boilerplate for Meteor.</p>
            </div>
        );
    }
}