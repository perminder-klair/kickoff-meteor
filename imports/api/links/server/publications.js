import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';
import _ from 'underscore';

Meteor.publish('links', function linksPublication(limit=50, skip=0, query) {
    new SimpleSchema({
        limit: { type: Number },
        skip: { type: Number }
    }).validate({ limit, skip });

    let find = {};
    if (!_.isUndefined(query) && !_.isNull(query)) {
        let queryRegex = ".*" + query + ".*";
        find = {
            active: true,
            $or: [
                {text: {$regex: queryRegex, $options: 'i'}},
                {url: {$regex: queryRegex, $options: 'i'}}
            ]
        };
    }

    return Links.find({}, {sort: {createdAt: -1}, fields: Links.publicFields});
});
