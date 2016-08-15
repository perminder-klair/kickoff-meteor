import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import UserListItem from '../components/UserListItem';

class UsersListPage extends Component {
    render() {
        let { users } = this.props;
        return (
            <div className="ui container">
                <h1 className="ui header">All users</h1>
                <div className="ui items">
                    {users.map(user => <UserListItem key={user._id} user={user}/>)}
                </div>
            </div>
        )
    }
}

UsersListPage.propTypes = {
    users: PropTypes.array.isRequired
};

export default createContainer(function () {
    Meteor.subscribe('users.list');

    return {
        users: Meteor.users.find({}, {sort: {createdAt: -1}}).fetch()
    };
}, UsersListPage);