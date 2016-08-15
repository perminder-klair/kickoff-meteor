import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

export default class DashboardPage extends Component {
    render() {
        return (
            <div className="ui container">
                <h1 className="ui header text center">Welcome to Meteor</h1>
                <p className="text center">This is a starting point boilerplate for Meteor.</p>
            </div>
        );
    }
}