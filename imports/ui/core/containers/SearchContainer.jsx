import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

//to get database
import { Links } from '../../../api/links/links';

import SearchPage from '../pages/SearchPage.jsx';

export default createContainer((params) => {
    let {query} = params;
    let limit = 100;

    //to request data from db via server
    let handle = Meteor.subscribe('links', limit, 0, query);

    return {
        loading: !handle.ready(),
        links: Links.find({}, {sort: {createdAt: -1}}).fetch()
    };
}, SearchPage);