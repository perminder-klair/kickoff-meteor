import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import _ from 'underscore';
import { alertify } from 'meteor/ovcharik:alertifyjs';

class SubscribeUserBtn extends Component {
    subscribe() {
        Meteor.call('users.subscribe', this.props.user._id, (err) => {
            if (err) {
                alertify.error(err.reason);
            } else {
                alertify.success("Subscribed successfully!");
            }
        });
    }

    unSubscribe() {
        Meteor.call('users.unSubscribe', this.props.user._id, (err) => {
            if (err) {
                alertify.error(err.reason);
            } else {
                alertify.success("Un-subscribed successfully!");
            }
        });
    }

    render() {
        let {user, currentUser} = this.props;
        let subscribersCount = !_.isUndefined(user.subscribersCount) ? user.subscribersCount : 0;

        if (!_.isNull(currentUser) && !_.isUndefined(currentUser.subscribedTo) && _.indexOf(currentUser.subscribedTo, user._id) !== -1) {
            //is in array
            return (
                <button className="ui secondary button" onClick={this.unSubscribe.bind(this)}>subscribed ({subscribersCount})</button>
            )
        } else {
            //is not in array
            return (
                <button className="ui primary button" onClick={this.subscribe.bind(this)}>subscribe ({subscribersCount})</button>
            )
        }
    }
}

SubscribeUserBtn.defaultProps = {
    user: {}
};

SubscribeUserBtn.propTypes = {
    user: PropTypes.object.isRequired,
    currentUser: PropTypes.object
};

export default createContainer(() => {
    return {
        currentUser: Meteor.user()
    };
}, SubscribeUserBtn);