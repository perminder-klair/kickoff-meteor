import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
    'users.update'(id, doc) {
        check(id, String);
        check(doc, Object);

        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        //console.log('method', doc);
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
        check(userId, String);

        if (_.isNull(this.userId)) {
            //if not logged in
            throw new Meteor.Error('not-logged-in', 'Please login to continue.');
        }

        let user = Meteor.users.findOne(userId);
        if (_.isNull(user)) {
            //if not logged in
            throw new Meteor.Error('not-allowed', 'Invalid users ID.');
        }
        //console.log(currentUser);

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
        check(userId, String);

        if (_.isNull(this.userId)) {
            //if not logged in
            throw new Meteor.Error('not-logged-in', 'Please login to continue.');
        }

        let user = Meteor.users.findOne(userId);
        if (_.isNull(user)) {
            //if not logged in
            throw new Meteor.Error('not-allowed', 'Invalid users ID.');
        }
        //console.log(currentUser);

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
