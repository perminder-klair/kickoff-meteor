import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import UserListItem from '../components/UserListItem';

export default class UsersListPage extends Component {
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
