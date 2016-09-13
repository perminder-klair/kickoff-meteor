import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import _ from 'underscore';

import ProfileViewPage from '../pages/ProfileViewPage.jsx';

//to get database
import { Links } from '../../../api/links/links';

export default createContainer((props) => {
    let userId = _.isUndefined(props.id) ? Meteor.userId() : props.id;

    //ask server to send user data
    Meteor.subscribe('users.single', userId);
    Meteor.subscribe('user.links', userId, 50);

    return {
        user: Meteor.users.findOne(userId),
        links: Links.find({}, {sort: {createdAt: -1}}).fetch(),
        isCurrentUser: _.isUndefined(props.id)
    };
}, ProfileViewPage);