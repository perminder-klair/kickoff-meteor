import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import UsersListPage from '../pages/UsersListPage.jsx';

export default createContainer(() => {
    Meteor.subscribe('users.list');

    return {
        users: Meteor.users.find({}, {sort: {createdAt: -1}}).fetch()
    };
}, UsersListPage);