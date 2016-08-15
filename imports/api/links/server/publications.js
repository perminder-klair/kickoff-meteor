import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Counts } from 'meteor/tmeasday:publish-counts';
import _ from 'underscore';

import { Links } from '../links.js';

Meteor.publish('links', function linksPublication(limit=50, skip=0, query) {
    //todo
    //new SimpleSchema({
    //    limit: { type: Number, optional: true },
    //    skip: { type: Number, optional: true },
    //    query: { type: String, optional: true }
    //}).validate({ limit, skip, query });

    let find = {isActive: true};
    if (!_.isUndefined(query) && !_.isNull(query)) {
        let queryRegex = ".*" + query + ".*";
        find = {
            isActive: true,
            $or: [
                {text: {$regex: queryRegex, $options: 'i'}},
                {url: {$regex: queryRegex, $options: 'i'}}
            ]
        };
    }

    Counts.publish(this, 'total.links', Links.find(find));

    return Links.find(find, {sort: {createdAt: -1}, fields: Links.publicFields});
});

Meteor.publish('links.single', function linksSinglePublication(id) {
    //todo
    //new SimpleSchema({
    //    id: { type: String }
    //}).validate({ id });

    return Links.find({_id: id, isActive: true}, {fields: Links.publicFields});
});