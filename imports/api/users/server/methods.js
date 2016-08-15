import { Meteor } from 'meteor/meteor';

//only run on server NOT CLIENT
Accounts.onCreateUser(function(options, user) {
    user.profile = {};
    user.profile.first_name = options.profile.first_name;
    user.profile.last_name = options.profile.last_name;
    user.slug = user.username;

    return user;
});

Accounts.onLogin(function(data) {
    Meteor.users.update(data.user._id, {
        '$set': {
            lastLoginAt: new Date()
        }
    });
});