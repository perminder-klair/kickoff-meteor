import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import _ from 'underscore';

Meteor.methods({
    'users.update'({ first_name, last_name, location, profilePicture }) {
        new SimpleSchema({
            first_name: { type: String },
            last_name: { type: String },
            location: { type: String },
            profilePicture: { type: String, optional: true }
        }).validate({ first_name, last_name, location, profilePicture });

        // Make sure the user is logged in before inserting a task
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        return Meteor.users.update(this.userId, {
            '$set': {
                'profile.first_name': first_name,
                'profile.last_name': last_name,
                'profile.location': location,
                'profile.profilePicture': profilePicture
            }
        });
    },

    'users.subscribe'(userId) {
        new SimpleSchema({
            userId: { type: String }
        }).validate({ userId });

        if (_.isNull(this.userId)) {
            //if not logged in
            throw new Meteor.Error('not-logged-in', 'Please login to continue.');
        }

        let user = Meteor.users.findOne(userId);
        if (_.isNull(user)) {
            //if not logged in
            throw new Meteor.Error('not-allowed', 'Invalid users ID.');
        }

        //increase followers and following count
        Meteor.users.update({_id: this.userId}, {
            $inc: {subscribedToCount: 1},
            $push: {subscribedTo: userId}
        });

        Meteor.users.update({_id: userId}, {
            $inc: {subscribersCount: 1},
            $push: {subscribers: this.userId}
        });

        return true;
    },

    'users.unSubscribe'(userId) {
        new SimpleSchema({
            userId: { type: String }
        }).validate({ userId });

        if (_.isNull(this.userId)) {
            //if not logged in
            throw new Meteor.Error('not-logged-in', 'Please login to continue.');
        }

        let user = Meteor.users.findOne(userId);
        if (_.isNull(user)) {
            //if not logged in
            throw new Meteor.Error('not-allowed', 'Invalid users ID.');
        }

        //increase followers and following count
        Meteor.users.update({_id: this.userId}, {
            $inc: {subscribedToCount: -1},
            $pull: {subscribedTo: userId}
        });

        Meteor.users.update({_id: userId}, {
            $inc: {subscribersCount: -1},
            $pull: {subscribers: this.userId}
        });

        return true;
    }
});
