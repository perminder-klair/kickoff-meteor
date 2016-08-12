import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class LinkItem extends Component {
    render() {
        return (
            <div className="item">
                <div className="content">
                    <a href={FlowRouter.path('Links.view', {id: this.props.link._id})}>{this.props.link.title}</a>
                </div>
            </div>
        )
    }
}

LinkItem.propTypes = {
    link: PropTypes.object.isRequired
};