import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { alertify } from 'meteor/ovcharik:alertifyjs';

import LinkForm from '../components/LinkForm.jsx';

export default class LinksCreatePage extends Component {
    handleSubmit(doc) {
        Meteor.call('links.insert', doc, function (err) {
            if (!err) {
                //redirect back to venues page
                FlowRouter.go('Links.list');
                alertify.success('Link created successfully!');
            } else {
                //throw error
                console.log(err);
                alertify.error(err.reason);
            }
        });
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">Create link</h1>
                <LinkForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}