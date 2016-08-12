import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Counts } from 'meteor/tmeasday:publish-counts';
import _ from 'underscore';

import { Links } from '../links.js';

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

    Counts.publish(this, 'total.links', Links.find(find));

    return Links.find({}, {sort: {createdAt: -1}, fields: Links.publicFields});
});
