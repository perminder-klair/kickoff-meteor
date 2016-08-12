import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import VenueForm from '../components/VenueForm';

export default class LinksCreatePage extends Component {
    handleSubmit(doc) {
        Meteor.call('venues.insert', doc.title, doc.description, function (err) {
            if (!err) {
                //redirect back to venues page
                FlowRouter.go('Venues');
            } else {
                //throw error
                console.log(err);
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Create venue</h1>
                <VenueForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}