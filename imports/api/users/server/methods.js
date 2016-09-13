import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

//only run on server NOT CLIENT
Accounts.onCreateUser((options, user) => {
    console.log('options', options);
    user.profile = {};
    user.profile.first_name = options.profile.first_name;
    user.profile.last_name = options.profile.last_name;
    user.slug = user.username;

    return user;
});

Accounts.onLogin((data) => {
    Meteor.users.update(data.user._id, {
        '$set': {
            lastLoginAt: new Date()
        }
    });
});