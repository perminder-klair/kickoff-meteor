import { Meteor } from 'meteor/meteor';
import _ from 'underscore';
import { createContainer } from 'meteor/react-meteor-data';

import LatestLinks from '../components/LatestLinks';

//to get database
import { Links } from '../../../api/links/links';

export default createContainer(function (props) {
    let limit = !_.isUndefined(props.limit) ? props.limit : 5;

    //to request data from db via server, for security from publications
    Meteor.subscribe('links', limit);

    return {
        links: Links.find({}, {sort: {createdAt: -1}, limit: limit}).fetch()//this is local query
    };
}, LatestLinks);