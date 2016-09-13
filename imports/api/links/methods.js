import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import _ from 'underscore';

import { Links } from './links.js';

Meteor.methods({
    'links.insert'({ text, url, featuredImage }) {
        new SimpleSchema({
            text: { type: String },
            url: { type: String },
            featuredImage: { type: String, optional: true }
        }).validate({ text, url, featuredImage });

        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        return Links.insert({
            text,
            url,
            featuredImage,
            createdAt: new Date(),
            owner: Meteor.userId()
        });
    },

    'links.update'(linkId, { text, url, featuredImage }) {
        new SimpleSchema({
            linkId: { type: String },
            text: { type: String },
            url: { type: String },
            featuredImage: { type: String, optional: true }
        }).validate({ linkId, text, url, featuredImage });

        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        const link = Links.findOne(linkId);

        // Make sure only the task owner can make a task private
        if (link.owner !== Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        return Links.update(linkId, { $set: {
            text, url, featuredImage
        } });
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

        return Links.remove(linkId);
    }
});
