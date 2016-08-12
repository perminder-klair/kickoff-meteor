import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import _ from 'underscore';

import { Links } from '../links/links.js';

// Deny all client-side updates to user documents
Meteor.users.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

let UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        optional: true
    },
    lastName: {
        type: String,
        optional: true
    },
    about: {
        type: String,
        optional: true
    },
    dob: {
        type: Date,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['male', 'female'],
        optional: true
    },
    location: {
        type: String,
        optional: true
    },
    profilePicture: {
        type: String,
        optional: true,
        //blackbox: true //to ship validations
    },
    coverImage: {
        type: String,
        optional: true,
        //blackbox: true
    }
});

Meteor.users.schema = new SimpleSchema({
    username: {
        type: String,
        optional: true
    },
    emails: {
        type: Array,
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            return new Date()
        }
    },
    lastLoginAt: {
        type: Date,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    //custom values
    profile: {
        type: UserProfile,
        optional: true,
        defaultValue: {
            firstName: null,
            lastName: null,
            dob: null,
            gender: null,
            location: null,
            profilePicture: null,
            coverImage: null
        }
    },
    subscribers: {
        type: [String],
        optional: true,
        autoValue: function() {
            return []
        }
    },
    subscribersCount: {
        type: Number,
        optional: true,
        autoValue: function() {
            return 0;
        }

    },
    subscribedTo: {
        type: [String],
        optional: true,
        autoValue: function() {
            return []
        }
    },
    subscribedToCount: {
        type: Number,
        optional: true,
        autoValue: function() {
            return 0;
        }

    }
});

Meteor.users.attachSchema(Meteor.users.schema);

Meteor.users.publicFields = {
    username: 1,
    emails: 1,
    profile: 1,
    subscribers: 1,
    subscribersCount: 1
};

Meteor.users.helpers({
    fullName() {
        if (_.isNull(this.profile.firstName)) {
            return this.username;
        } else {
            return `${this.profile.firstName} ${this.profile.lastName}`;
        }
    },
    image() {
        return '/images/face-placeholder.jpg';
    },
    venues() {
        return Links.find({owner: this._id}, {sort: {createdAt: -1}, fields: Links.publicFields});
    }
});