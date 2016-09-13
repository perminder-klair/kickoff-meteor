import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import _ from 'underscore';

import LinksListPage from '../pages/LinksListPage.jsx';

//to get database
import { Links } from '../../../api/links/links';

export default createContainer(() => {
    let limit = 2;
    let totalItems = 0;

    Tracker.autorun(() => {
        let query = FlowRouter.getQueryParam('query');
        let page = !_.isUndefined(FlowRouter.getQueryParam('page')) ? FlowRouter.getQueryParam('page') : 1;
        let skip = (page-1) * limit;

        //to request data from db via server, for security from publications
        Meteor.subscribe('links', limit, skip, query);

        //get total count of items from server
        totalItems = Counts.get('total.links');
    });

    return {
        links: Links.find({}, {sort: {createdAt: -1}}).fetch(),//this is local query
        totalItems,
        limit
    };
}, LinksListPage);