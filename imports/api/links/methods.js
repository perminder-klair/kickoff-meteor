import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import _ from 'underscore';

import { Links } from './links.js';

Meteor.methods({
    'links.insert'(doc) {
        //check(url, String);todo

        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Links.insert(_.extend(doc, {
            createdAt: new Date(),
            owner: Meteor.userId()
        }));
    },

    'links.update'(linkId, doc) {
        check(linkId, String);
        //check(doc, Boolean);//todo

        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        const link = Links.findOne(linkId);

        // Make sure only the task owner can make a task private
        if (link.owner !== Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Links.update(linkId, { $set: doc });
    },

    'links.remove'(linkId) {
        check(linkId, String);

        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        const link = Links.findOne(linkId);

        // Make sure only the task owner can make a task private
        if (link.owner !== Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Links.remove(linkId);
    }
});
