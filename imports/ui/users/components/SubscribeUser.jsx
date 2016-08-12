import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class SubscribeUser extends Component {
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
        //console.log(this.props.user);
        //console.log(this.props.currentUser);
        let {user, currentUser} = this.props;

        if (!_.isNull(currentUser) && !_.isUndefined(currentUser.subscribedTo) && _.indexOf(currentUser.subscribedTo, user._id) !== -1) {
            //is in array!!!!
            return (
                <button className="btn btn-success" onClick={this.unSubscribe.bind(this)}>subscribed ({this.props.user.subscribersCount})</button>
            )
        } else {
            //its not in array
            return (
                <button className="btn btn-default" onClick={this.subscribe.bind(this)}>subscribe ({this.props.user.subscribersCount})</button>
            )
        }
    }
}

SubscribeUser.defaultProps = {
    user: {}
};

SubscribeUser.propTypes = {
    user: PropTypes.object.isRequired,
    currentUser: PropTypes.object
};

export default createContainer((props) => {
    return {
        currentUser: Meteor.user()
    };
}, SubscribeUser);