import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Meteor.methods({
    'users.update'(id, doc) {
        new SimpleSchema({
            id: { type: String },
            doc: { type: Object }
        }).validate({ id, doc });

        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Meteor.users.update(id, {
            '$set': {
                'profile.first_name': doc.first_name,
                'profile.last_name': doc.last_name,
                'profile.location': doc.location,
                'profile.profilePicture': doc.profilePicture
            }
        });

        return true;
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
    }
});
