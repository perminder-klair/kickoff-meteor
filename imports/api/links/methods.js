import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import _ from 'underscore';

import { Links } from './links.js';

Meteor.methods({
    'links.insert'(doc) {
        new SimpleSchema({
            doc: { type: Object }
        }).validate({ doc });

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
        new SimpleSchema({
            linkId: { type: String },
            doc: { type: Object }
        }).validate({ linkId, doc });

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
        new SimpleSchema({
            linkId: { type: String }
        }).validate({ linkId });

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
