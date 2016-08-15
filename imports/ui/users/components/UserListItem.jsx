import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import _ from 'underscore';

export default class UserListItem extends Component {
    fullName() {
        let { user } = this.props;

        if (_.isUndefined(user.profile.firstName)) {
            if (!_.isUndefined(user.username)) {
                return user.username;
            } else {
                return user.emails[0].address;
            }
        } else {
            return `${user.profile.firstName} ${user.profile.lastName}`;
        }
    }

    render() {
        let { user } = this.props;

        return (
            <div className="ui item">
                <div className="content">
                    <a
                        className="header"
                        href={FlowRouter.path("User.view", {id: user._id})}>
                        {this.fullName()}
                    </a>
                </div>
            </div>
        )
    }
}


UserListItem.propTypes = {
    user: PropTypes.object.isRequired
};